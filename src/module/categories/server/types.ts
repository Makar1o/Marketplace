import { inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "@/trpc/routers/_app";

export type CategorierGetManyOutput =
  inferRouterOutputs<AppRouter>["categories"]["getMany"];
// export type CategorierGetManyOutputSingle = CategorierGetManyOutput[0];
