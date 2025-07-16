import { createTRPCRouter } from "../init";

import { categoriesRouter } from "@/module/categories/server/procedures";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
