import { X } from "lucide-react";
import useSearchState from "../-stores/useSearch.store";
import CategoriesCollapsible from "./collapsible-categories.component";
import PriceCollapsible from "./collapsibe-price.component";
import RatingCollapsible from "./rating-collapsible.component";
import { Button } from "@/components/ui/button";

const FilterSidebar = () => {
    const showFilters = useSearchState(state => state.showFilters)
    const updateStore = useSearchState(state => state.updateStore)

    const toggleFilters = (toggle: boolean) => () => updateStore({showFilters: toggle})
    // const handleSection = (section: keyof FilterSections) => () => {
    //     toggleSection(section)
    // }

    const mobFilterOverlay = () => {
        return showFilters && (
            <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden" onClick={toggleFilters(false)} />
        )
    }

    const filterClass = `
        fixed inset-y-0 left-0 z-50 w-80 bg-card shadow-2xl transform transition-transform duration-300 ease-out overflow-y-auto
        lg:sticky lg:top-13 lg:self-start lg:inset-auto lg:z-auto lg:w-64 lg:shrink-0 lg:transform-none lg:shadow-none lg:bg-transparent lg:overflow-visible
        ${showFilters ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    `

    return (
        <>
            {/* Mobile Filter Overlay */}
            {mobFilterOverlay()}

            {/* Filters Sidebar */}
            <aside className={filterClass}>
                <div className="p-5 lg:p-0">
                    <div className="bg-card rounded-none lg:rounded-2xl lg:p-5 border border-border h-screen lg:h-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-5 pb-4 border-b border-border">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                                Filters
                            </h3>
                            <button
                                onClick={toggleFilters(false)}
                                className="lg:hidden p-1.5 rounded-lg hover:bg-muted transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Categories — Collapsible */}
                        <CategoriesCollapsible />

                        <hr className="border-border" />

                        {/* Price Range — Collapsible */}
                        <PriceCollapsible />

                        <hr className="border-border" />

                        {/* Rating — Collapsible */}
                        <RatingCollapsible />

                        {/* Clear */}
                        <Button
                            variant="outline"
                            className="w-full rounded-xl"
                            // onClick={() => {
                            //     setPriceRange({ min: 0, max: 1000 });
                            //     setSortBy("default");
                            //     router.push("/search");
                            // }}
                        >
                            Clear All Filters
                        </Button>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default FilterSidebar