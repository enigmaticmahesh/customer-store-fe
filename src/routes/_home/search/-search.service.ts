import { api } from "@/api/api-client";
import type { ApiResponse } from "@/api/api.interface";
import type {
  PaginatedProdsData,
  ProductTableState,
} from "./-search-page.interface";

const SearchService = {
  getProducts: async (
    state: ProductTableState,
  ): Promise<ApiResponse<PaginatedProdsData>> => {
    try {
      // const { limit, cursor, dir, name, sku, barCode, brandId, hsnId, subcatId } = state
      const { limit, cursor, dir, name } = state;
      const params = { limit, cursor, dir, name };
      const res = await api
        .get("products/store-products", { searchParams: params })
        .json<ApiResponse<PaginatedProdsData>>();
      return res;
    } catch (err: unknown) {
      // // 1. Narrow it to an Axios-specific error
      // if (axios.isAxiosError(err)) {
      //   throw new Error(err.response?.data?.message || 'Network error', { cause: err });
      // }

      // // 2. Narrow it to a generic standard JavaScript Error
      // if (err instanceof Error) {
      //   throw new Error(err.message, { cause: err });
      // }

      // // 3. Fallback for strings or weird objects thrown
      // throw new Error('An unexpected error occurred', { cause: err });

      throw new Error("Error while fetching products", { cause: err });
    }
  },
};

export default SearchService;
