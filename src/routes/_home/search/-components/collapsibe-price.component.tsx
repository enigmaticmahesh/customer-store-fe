import { ChevronDown } from "lucide-react"
import useSearchState from "../-stores/useSearch.store"
import type { FilterSections } from "../-search-page.interface"
import type { ChangeEvent } from "react"

const PriceCollapsible = () => {
    const toggleSection = useSearchState(state => state.toggleSection)
    const price = useSearchState(state => state.expandedSections.price)
    const priceRange = useSearchState(state => state.priceRange)
    const updatePriceRange = useSearchState(state => state.updatePriceRange)

    const handleSection = (section: keyof FilterSections) => () => {
        toggleSection(section)
    }

    const rangeDown = (e: ChangeEvent<HTMLInputElement>) => {
        updatePriceRange({min: Number(e.target.value)})
    }

    const rangeUp = (e: ChangeEvent<HTMLInputElement>) => {
        updatePriceRange({max: Number(e.target.value)})
    }

    return (
        <div className="mb-1">
            <button
                onClick={handleSection("price")}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
                Price Range
                <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${price ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${price ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="flex items-center gap-3 pb-4">
                <input
                    type="number"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={rangeDown}
                    className="w-full rounded-xl border border-border bg-muted/50 px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                />
                <span className="text-muted-foreground text-xs">to</span>
                <input
                    type="number"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={rangeUp}
                    className="w-full rounded-xl border border-border bg-muted/50 px-3 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                />
                </div>
            </div>
        </div>
    )
}

export default PriceCollapsible