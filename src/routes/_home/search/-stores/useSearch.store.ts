import { create } from "zustand";
import type {
  SearchStore,
  SearchState,
  SearchStoreState,
} from "../-search-page.interface";
import { sortedProducts, topCategories, type SortedProd } from "../-temp-data";
import createProdListStore from "@/stores/products-list-store-skeleton";
import type { ProdListSkeletonStateType } from "@/interfaces/common-prod-list.interface";

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
};

const InitProdListData: ProdListSkeletonStateType<SortedProd> = {
  products: sortedProducts,
  quickView: false,
  quickViewProd: null,
};

const useSearchState = create<SearchStore>((set, get, ...args) => ({
  ...InitialState,
  ...createProdListStore<SortedProd>(InitProdListData)(set, get, ...args),
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
