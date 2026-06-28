import type {
  ProdListSkeletonStateType,
  ProdListStoreType,
} from "@/schemas/app-global-stores.schema";
import createProdListStore from "@/stores/products-list-store-skeleton";
import { create } from "zustand";
import { popularProducts } from "./temp.data";

type PopularProduct = (typeof popularProducts)[number];

const InitialState: ProdListSkeletonStateType<PopularProduct> = {
  products: popularProducts,
  quickView: false,
  quickViewProd: null,
};

const usePopularProductsStore = create<ProdListStoreType<PopularProduct>>(
  createProdListStore<PopularProduct>(InitialState),
);

export default usePopularProductsStore;
