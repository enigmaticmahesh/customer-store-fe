import { ChevronDown } from "lucide-react"
import type { FilterSections } from "../-search-page.interface"
import useSearchState from "../-stores/useSearch.store"

const CategoriesCollapsible = () => {
    const toggleSection = useSearchState(state => state.toggleSection)
    const categories = useSearchState(state => state.expandedSections.categories)
    const topCategories = useSearchState(state => state.topCategories)
    const selectedCategory = useSearchState(state => state.selectedCategory)
    const updateStore = useSearchState(state => state.updateStore)

    const handleSection = (section: keyof FilterSections) => () => {
        toggleSection(section)
    }

    const handleCategoryClick = (categoryId: string) => () => {
        updateStore({selectedCategory: categoryId})
    }

    const catListUi = () => {
        const btnClass = (cat: any) => {
            const selected = selectedCategory === cat._id
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            return `block w-full rounded-lg px-3 py-2 text-left text-sm transition-all duration-150 ${selected}`
        }
        return topCategories.map((cat) => (
            <button
                key={cat._id}
                onClick={handleCategoryClick(cat._id)}
                className={btnClass(cat)}
            >
                {/* {showingTranslateValue(cat.name)} */}
                {cat.name.en}
            </button>
        ))
    }

    return (
        <div className="mb-1">
            <button
                onClick={handleSection("categories")}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
                Categories
                <ChevronDown
                className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${categories ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${categories ? "max-h-100 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="space-y-0.5 pb-4 max-h-60 overflow-y-auto">
                {catListUi()}
                </div>
            </div>
        </div>
    )
}

export default CategoriesCollapsible