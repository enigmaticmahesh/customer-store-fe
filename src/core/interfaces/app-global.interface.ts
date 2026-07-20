// // 💡 You explicitly pass the 2 targeted function keys as the second argument!
// store: StoreApi<AtLeastOne<MyRandomStore, 'updateStore' | 'updateProdListStore'>>;

export type AtLeastOne<T, Keys extends keyof T = keyof T> =
  //   Pick<
  //   T,
  //   Exclude<keyof T, Keys>
  // > &
  {
    [K in Keys]-?: Record<K, T[K]> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

export interface Product {
  id: number;
  name: string;
  mrp: string;
  price: string;
  qty: string;
  mfD: string;
  expD: string;
  sku: string;
  barCode: string;
  hsnId: number;
  brandId: number;
  subcatId: number;
  hsnCode: {
    id: number;
    code: string;
  };
  brand: {
    id: number;
    name: string;
  };
  subCat: {
    id: number;
    name: string;
  };
}
