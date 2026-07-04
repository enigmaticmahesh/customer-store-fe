import type {
  PaginatedProdsData,
  ProductTableState,
} from "./-search-page.interface";

export const InitialProdTableState: ProductTableState = {
  limit: 10,
  dir: undefined,
  cursor: undefined,
  name: undefined,
  // sku: undefined,
  // barCode: undefined,
  // brandId: undefined,
  // subcatId: undefined,
  // hsnId: undefined,
};

export const DefaultPaginatedProdsData: PaginatedProdsData = {
  nextID: 0,
  firstID: 0,
  hasNext: false,
  hasPrev: false,
  products: [],
};
