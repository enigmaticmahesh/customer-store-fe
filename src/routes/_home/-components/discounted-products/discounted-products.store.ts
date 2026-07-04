import type {
  ProdListSkeletonStateType,
  ProdListStoreType,
} from "@/interfaces/common-prod-list.interface";
import createProdListStore from "@/stores/products-list-store-skeleton";
import { create } from "zustand";
import type { Product } from "@/interfaces/app-global.interface";

const InitialState: ProdListSkeletonStateType<Product> = {
  products: [],
  quickView: false,
  quickViewProd: null,
};

const useDiscountedProductsStore = create<ProdListStoreType<Product>>(
  createProdListStore<Product>(InitialState),
);

export default useDiscountedProductsStore;
