import { authRouter } from "@/module/auth/server/procedures";
import { createTRPCRouter } from "../init";

import { categoriesRouter } from "@/module/categories/server/procedures";
import { productsRouter } from "@/module/products/server/procedures";
import { tagsRouter } from "@/module/tags/server/procedures";
import { tenantsRouter } from "@/module/tenants/server/procedures";
import { checkoutRouter } from "@/module/checkout/server/procedures";
import { libraryRouter } from "@/module/library/server/procedures";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  tags: tagsRouter,
  tenants: tenantsRouter,
  library: libraryRouter,
  checkout: checkoutRouter,
  products: productsRouter,
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
