import { create } from "zustand";
import type { SearchStore, SearchStoreState } from "../-search-page.interface";
import { sortedProducts, topCategories } from "../-temp-data";

const InitialState: SearchStoreState = {
    showFilters: false,
    expandedSections: {
        categories: true,
        price: true,
        rating: false
    },
    topCategories: topCategories,
    selectedCategory: '',
    priceRange: { min: 0, max: 1000 },
    sortedProducts: sortedProducts,
    viewMode: 'grid',
    sortBy: 'default'
}

const useSearchState = create<SearchStore>((set) => ({
    ...InitialState,
    updateStore: (data: Partial<SearchStoreState>) => set((state) => ({...state, ...data})),
    toggleSection: (section) => set((state) => ({...state, expandedSections: { ...state.expandedSections, [section]: !state.expandedSections[section] }})),
    updatePriceRange: (data) => set((state) => ({...state, priceRange: {...state.priceRange, ...data}})),
}))

export default useSearchState