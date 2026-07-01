import type {
  ProdListSkeletonStateType,
  ProdListStoreType,
} from "@/interfaces/common-prod-list.interface";
import createProdListStore from "@/stores/products-list-store-skeleton";
import { create } from "zustand";
import { discountedProducts, type DiscountedProd } from "./temp.data";

const InitialState: ProdListSkeletonStateType<DiscountedProd> = {
  products: discountedProducts,
  quickView: false,
  quickViewProd: null,
};

const useDiscountedProductsStore = create<ProdListStoreType<DiscountedProd>>(
  createProdListStore<DiscountedProd>(InitialState),
);

export default useDiscountedProductsStore;
