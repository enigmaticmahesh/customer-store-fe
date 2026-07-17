import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../-product.service";

export const useProductDetails = (productId: string) => {
    return useQuery({
      queryKey: ["product-details", productId],
  
      queryFn: () => getProductById(productId),
  
      enabled: !!productId,
    });
  };