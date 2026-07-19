import type {
  ProdListSkeletonStateType,
  ProdListStoreType,
} from "@/core/interfaces/common-prod-list.interface";
import createProdListStore from "@/core/stores/products-list-store-skeleton";
import { create } from "zustand";
import type { Product } from "@/core/interfaces/app-global.interface";

const InitialState: ProdListSkeletonStateType<Product> = {
  products: [],
  quickView: false,
  quickViewProd: null,
};

const usePopularProductsStore = create<ProdListStoreType<Product>>(
  createProdListStore<Product>(InitialState),
);

export default usePopularProductsStore;
