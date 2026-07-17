import { api } from "@/api/api-client";
import type { Product } from "@/interfaces/app-global.interface";
import type { ApiResponse } from "@/api/api.interface";

export const getProductById = async (productId: string): Promise<ApiResponse<Product>> => {

    try {
        return await api
            .get(`products/store-products/${productId}`)
            .json<ApiResponse<Product>>();
        } catch (err: unknown) {
          throw new Error("Failed to get product details", {
            cause: err,
          });
        }
  };