// import { useQuery } from "@tanstack/react-query"
// import { fetchProds } from "../-api/products.api"
// import { DefaultPaginatedProdsData } from "../-products.schema"
// import { toast } from "sonner"
// import useProdsListStore from "../-stores/prods-list.store"
// import { apiErrorMsg } from "@/core/app-utils/error-utils"

import { useQuery } from "@tanstack/react-query";
import SearchService from "../-search.service";
import useSearchState from "../-stores/useSearch.store";
import { DefaultPaginatedProdsData } from "../-search-page.schema";

export function useFetchProds() {
  const cursor = useSearchState((state) => state.cursor);
  const dir = useSearchState((state) => state.dir);
  const limit = useSearchState((state) => state.limit);
  const name = useSearchState((state) => state.name);
  // const sku = useProdsListStore(state => state.sku)
  // const barCode = useProdsListStore(state => state.barCode)
  // const brandId = useProdsListStore(state => state.brandId)
  // const hsnId = useProdsListStore(state => state.hsnId)
  // const subcatId = useProdsListStore(state => state.subcatId)
  const { data = DefaultPaginatedProdsData, isFetching } = useQuery({
    queryKey: ["products_list", limit, cursor, dir, name],
    // queryFn: async () => {
    //     try {
    //         const res = await fetchProds({
    //             limit,
    //             cursor,
    //             dir,
    //             name,
    //             sku,
    //             barCode,
    //             brandId,
    //             hsnId, subcatId
    //         })

    //         return res
    //     } catch (err: any) {
    //         // console.log({err})

    //         toast.error('Failed to fetch products', {
    //             description: apiErrorMsg(err),
    //         })

    //         throw err
    //     }
    // },
    queryFn: async () =>
      SearchService.getProducts({ limit, cursor, dir, name }),
    select: (res) => res.data,
    // placeholderData: (prevData) => {
    //     // Keeps previous page visible when paginating, or falls back to baseline setup
    //     return prevData ?? {
    //         message: 'Fetching...',
    //         data: DefaultPaginatedProdsData
    //     };
    // },
  });

  return { data, isFetching };
}
