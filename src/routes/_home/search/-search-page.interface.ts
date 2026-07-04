import type { Product } from "@/interfaces/app-global.interface";
import type { ProdListSkeletonStateType } from "@/interfaces/common-prod-list.interface";
import type { TopCat } from "./-temp-data";

export type FilterSections = {
  categories: boolean;
  price: boolean;
  rating: boolean;
};

export interface ProductTableState {
  limit: number;
  cursor: number | undefined;
  dir: "prev" | "next" | undefined;
  name: string | undefined;
  // sku: string|undefined
  // barCode: string|undefined
  // brandId: string|undefined
  // hsnId: string|undefined
  // subcatId: string|undefined
}

export type SearchState = ProductTableState & {
  showFilters: boolean;
  expandedSections: FilterSections;
  topCategories: TopCat[];
  selectedCategory: string;
  priceRange: { min: number; max: number };
  viewMode: "grid" | "list";
  sortBy: string;
};

export type SearchStoreState = SearchState & ProdListSkeletonStateType<Product>;

export type SearchStore = SearchStoreState & {
  updateStore: (data: Partial<SearchStoreState>) => void;
  toggleSection: (section: keyof FilterSections) => void;
  updatePriceRange: (data: { [K in "min" | "max"]?: number }) => void;
};

export interface PaginatedProdsData {
  nextID: number;
  firstID: number;
  hasNext: boolean;
  hasPrev: boolean;
  products: Product[];
}
