// import type { Product } from "./app-global.interface";

export interface ProdListSkeletonStateType<Product> {
  products: Product[];
  quickView: boolean;
  quickViewProd: Product | null;
}

export interface ProdListActionType<T> {
  resetProdListStore: () => void;
  updateProdListStore: (data: Partial<ProdListSkeletonStateType<T>>) => void;
}

export type ProdListStoreType<T> = ProdListSkeletonStateType<T> &
  ProdListActionType<T>;

export interface BaseProdStoreContract {
  updateStore?: (data: any) => void;
  updateProdListStore?: (data: any) => void;
  // You can easily add more optional functions here later!
}
