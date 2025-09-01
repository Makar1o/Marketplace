import { trpc, getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import type { SearchParams } from "nuqs/server";
import { loadProductFilters } from "@/module/products/search-params";
import { ProductListView } from "@/module/products/ui/views/product-list-view";
import { DEFAULT_LIMIT } from "@/constants";
interface Props {
  searchParams: Promise<SearchParams>;
}

const Page = async ({ searchParams }: Props) => {
  const filters = await loadProductFilters(searchParams);

  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(
    trpc.products.getMany.infiniteQueryOptions({
      ...filters,
      limit: DEFAULT_LIMIT,
    })
  );

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductListView />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
