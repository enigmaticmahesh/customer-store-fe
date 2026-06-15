import { ChevronDown } from "lucide-react"
import type { FilterSections } from "../-search-page.interface"
import useSearchState from "../-stores/useSearch.store"

const RatingCollapsible = () => {
    const toggleSection = useSearchState(state => state.toggleSection)
    const rating = useSearchState(state => state.expandedSections.rating)

    const handleSection = (section: keyof FilterSections) => () => {
        toggleSection(section)
    }

    const ratingsListUi = () => {
        const ratingStarsUi = (rating: any) => {
            return [...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`h-3.5 w-3.5 ${i < rating ? "text-amber-400" : "text-muted-foreground/20"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))
        }
        return [4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex cursor-pointer items-center gap-2.5 group">
                <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border text-primary accent-primary"
                />
                <div className="flex items-center gap-1">
                    {ratingStarsUi(rating)}
                    <span className="ml-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    & up
                    </span>
                </div>
            </label>
        ))
    }
    return (
        <div className="mb-4">
            <button
                onClick={handleSection("rating")}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
                Rating
                <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${rating ? "rotate-180" : ""}`}
                />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${rating ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="space-y-2.5 pb-4">
                    {ratingsListUi()}
                </div>
            </div>
        </div>
    )
}

export default RatingCollapsible