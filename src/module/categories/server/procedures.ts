import { createTRPCRouter, baseProcedure } from "@/trpc/init";
import { Category } from "@/payload-types";
import type { Payload } from "payload";
export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const payload = ctx.db as Payload;
    const data = await payload.find({
      collection: "categories",
      depth: 1,
      pagination: false,
      where: {
        parent: {
          exists: false,
        },
      },

      sort: "name",
    });

    const formattedData = data.docs.map((doc) => ({
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
        ...(doc as Category),
      })),
    }));

    return formattedData;
  }),
});
