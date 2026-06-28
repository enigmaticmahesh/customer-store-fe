import type { ProdListSkeletonStateType } from "@/interfaces/common-prod-list.interface";
import type { SortedProd, TopCat } from "./-temp-data";

export type FilterSections = {
  categories: boolean;
  price: boolean;
  rating: boolean;
};

export type SearchState = {
  showFilters: boolean;
  expandedSections: FilterSections;
  topCategories: TopCat[];
  selectedCategory: string;
  priceRange: { min: number; max: number };
  viewMode: "grid" | "list";
  sortBy: string;
};

export type SearchStoreState = SearchState &
  ProdListSkeletonStateType<SortedProd>;

export type SearchStore = SearchStoreState & {
  updateStore: (data: Partial<SearchStoreState>) => void;
  toggleSection: (section: keyof FilterSections) => void;
  updatePriceRange: (data: { [K in "min" | "max"]?: number }) => void;
};
