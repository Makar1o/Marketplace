import { trpc, getQueryClient } from "@/trpc/server";
import {
  ProductList,
  ProductListSkeleton,
} from "@/module/products/ui/components/product-list";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
interface Props {
  params: Promise<{
    category: string;
  }>;
}

const Page = async ({ params }: Props) => {
  const { category } = await params;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.products.getMany.queryOptions({
      category,
    })
  );

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<ProductListSkeleton />}></Suspense>
        <ProductList category={category} />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
