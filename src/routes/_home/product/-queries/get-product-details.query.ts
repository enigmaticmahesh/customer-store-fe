import { useQuery } from "@tanstack/react-query";
import productService from "../-product.service";

export const useProductDetails = (productId: string) => {
    return useQuery({
      queryKey: ["product-details", productId],
  
      queryFn: () => productService.getProductById(productId),
  
      enabled: !!productId,
    });
  };