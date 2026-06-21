import type { SortedProd, TopCat } from "./-temp-data"

export type FilterSections = {
    categories: boolean,
    price: boolean,
    rating: boolean,
}

export type SearchStoreState = {
    showFilters: boolean
    expandedSections: FilterSections,
    topCategories: TopCat[]
    selectedCategory: string
    priceRange: { min: number, max: number }
    sortedProducts: SortedProd[],
    viewMode: 'grid'|'list'
    sortBy: string,
    quickView: boolean,
    quickViewProd: SortedProd|null,
}

export type SearchStore = SearchStoreState & {
    updateStore: (data: Partial<SearchStoreState>) => void
    toggleSection: (section: keyof FilterSections) => void
    updatePriceRange: (data: {[K in 'min' | 'max']?: number}) => void
}