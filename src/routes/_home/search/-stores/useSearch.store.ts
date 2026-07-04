import { create } from "zustand";
import type {
  SearchStore,
  SearchState,
  SearchStoreState,
} from "../-search-page.interface";
import { topCategories } from "../-temp-data";
import createProdListStore from "@/stores/products-list-store-skeleton";
import type { ProdListSkeletonStateType } from "@/interfaces/common-prod-list.interface";
import type { Product } from "@/interfaces/app-global.interface";

const InitialState: SearchState = {
  showFilters: false,
  expandedSections: {
    categories: true,
    price: true,
    rating: false,
  },
  topCategories: topCategories,
  selectedCategory: "",
  priceRange: { min: 0, max: 1000 },
  viewMode: "grid",
  sortBy: "default",
  limit: 10,
  dir: undefined,
  cursor: undefined,
  name: undefined,
};

const InitProdListData: ProdListSkeletonStateType<Product> = {
  products: [],
  quickView: false,
  quickViewProd: null,
};

const useSearchState = create<SearchStore>((set, get, ...args) => ({
  ...InitialState,
  ...createProdListStore<Product>(InitProdListData)(set, get, ...args),
  updateStore: (data: Partial<SearchStoreState>) =>
    set((state) => ({ ...state, ...data })),
  toggleSection: (section) =>
    set((state) => ({
      ...state,
      expandedSections: {
        ...state.expandedSections,
        [section]: !state.expandedSections[section],
      },
    })),
  updatePriceRange: (data) =>
    set((state) => ({
      ...state,
      priceRange: { ...state.priceRange, ...data },
    })),
}));

export default useSearchState;
