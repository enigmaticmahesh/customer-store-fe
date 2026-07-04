import { useQuery } from "@tanstack/react-query";
import HomeService from "../-home.service";

export function useFetchDiscountedProds() {
  const { data = [], isFetching } = useQuery({
    queryKey: ["discounted_products_list"],
    queryFn: async () => HomeService.getDiscountedProducts(),
    select: (res) => res.data,
  });

  return { data, isFetching };
}
