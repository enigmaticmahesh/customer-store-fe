import { api } from "@/api/api-client";
import type { Product } from "@/core/interfaces/app-global.interface";
import type { ApiResponse } from "@/api/api.interface";

const productService = {
  getProductById: async (productId: string): Promise<ApiResponse<Product>> => {
    try {
      const res = await api
        .get(`products/store-products/${productId}`)
        .json<ApiResponse<Product>>();
      return res;
    } catch (err: unknown) {
      throw new Error("Failed to get product details", {
        cause: err,
      });
    }
  },
}

export default productService;
