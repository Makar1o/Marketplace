import { authRouter } from "@/module/auth/server/procedures";
import { createTRPCRouter } from "../init";

import { categoriesRouter } from "@/module/categories/server/procedures";
import { productsRouter } from "@/module/products/server/procedures";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  products: productsRouter,
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
