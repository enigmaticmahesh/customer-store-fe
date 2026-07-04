import { useQuery } from "@tanstack/react-query";
import HomeService from "../-home.service";

export function useFetchPopularProds() {
  const { data = [], isFetching } = useQuery({
    queryKey: ["popular_products_list"],
    queryFn: async () => HomeService.getPopularProducts(),
    select: (res) => res.data,
  });

  return { data, isFetching };
}
