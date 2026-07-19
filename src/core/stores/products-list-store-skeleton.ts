import type {
  ProdListSkeletonStateType,
  ProdListStoreType,
} from "@/core/interfaces/common-prod-list.interface";
import type { StateCreator } from "zustand";

const InitialState: ProdListSkeletonStateType<any> = {
  products: [],
  quickView: false, // For modal toggle
  quickViewProd: null, // For product data in modal
};

// 1st Arg: EntireStore (The final store shape)
// 2nd Arg: [] (No input middleware)
// 3rd Arg: [] (No output middleware)
// 4th Arg: FeatureSlice (What this specific function builds)
const createProdListStore = <T, TParentStore = any>(
  initialState: ProdListSkeletonStateType<T> = InitialState,
): StateCreator<TParentStore, [], [], ProdListStoreType<T>> => {
  return (set) => ({
    ...initialState,
    resetProdListStore: () =>
      set((state: any) => ({ ...state, ...InitialState })),
    updateProdListStore: (data: Partial<ProdListSkeletonStateType<T>>) =>
      set((state: any) => ({ ...state, ...data })),
  });
};

export default createProdListStore;
