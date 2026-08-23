import z from "zod";

import { DEFAULT_LIMIT } from "@/constants";
import { Media, Tenant } from "@/payload-types";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import { TRPCError } from "@trpc/server";

export const libraryRouter = createTRPCRouter({
  getOne: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const ordersDara = await ctx.db.find({
        collection: "orders",
        limit: 1,
        pagination: false,
        where: {
          and: [
            {
              product: {
                equals: input.productId,
              },
            },
            {
              user: {
                equals: ctx.session.user.id,
              },
            },
          ],
        },
      });

      const order = ordersDara.docs[0];
      if (!order) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Order not found",
        });
      }

      const product = await ctx.db.findByID({
        collection: "products",
        id: input.productId,
      });

      if (!product) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Product not found",
        });
      }

      return product;
    }),

  getMany: protectedProcedure
    .input(
      z.object({
        cursor: z.number().default(1),
        limit: z.number().default(DEFAULT_LIMIT),
      })
    )
    .query(async ({ ctx, input }) => {
      const ordersDara = await ctx.db.find({
        collection: "orders",
        depth: 0, //just get id without populatingg
        page: input.cursor,
        limit: input.limit,
        where: {
          user: {
            equals: ctx.session.user.id,
          },
        },
      });

      const productIds = ordersDara.docs.map((order) => order.product);

      const productsData = await ctx.db.find({
        collection: "products",
        pagination: false,
        where: {
          id: {
            in: productIds,
          },
        },
        select: {
          content: false,
        },
      });

      // One query for the whole page instead of one per product.
      const reviewsData = await ctx.db.find({
        collection: "reviews",
        depth: 0,
        pagination: false,
        where: {
          product: {
            in: productsData.docs.map((doc) => doc.id),
          },
        },
        select: {
          product: true,
          rating: true,
        },
      });

      const reviewsByProduct = new Map<string, { sum: number; count: number }>();

      for (const review of reviewsData.docs) {
        const productId = String(review.product);
        const current = reviewsByProduct.get(productId) ?? { sum: 0, count: 0 };
        reviewsByProduct.set(productId, {
          sum: current.sum + review.rating,
          count: current.count + 1,
        });
      }

      const dataWithSummorizedReviews = productsData.docs.map((doc) => {
        const reviews = reviewsByProduct.get(String(doc.id));

        return {
          ...doc,
          reviewsCount: reviews?.count ?? 0,
          reviewsRating: reviews ? reviews.sum / reviews.count : 0,
        };
      });

      return {
        ...productsData,
        docs: dataWithSummorizedReviews.map((doc) => ({
          ...doc,
          image: doc.image as Media | null,
          tenant: doc.tenant as Tenant & { image: Media | null },
        })),
      };
    }),
});
