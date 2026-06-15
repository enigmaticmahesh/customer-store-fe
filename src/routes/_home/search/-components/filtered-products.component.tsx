import { Button } from "@/components/ui/button"
import useSearchState from "../-stores/useSearch.store"
import ProductsToolbar from "./products-toolbar.component"

const FilteredProducts = () => {
    const sortedProducts = useSearchState(state => state.sortedProducts)
    const viewMode = useSearchState(state => state.viewMode)

    const prodsListUi = () => {
        if (!sortedProducts.length) {
            return (
                <div className="flex flex-col items-center justify-center rounded-2xl bg-card py-20 px-8 text-center border border-border shadow-sm">
                    <img
                        className="mb-6 opacity-80"
                        src="/no-result.svg"
                        alt="No results"
                        width={260}
                        height={250}
                    />
                    <h2 className="text-xl font-bold text-foreground mb-2">
                        No products found
                    </h2>
                    <p className="text-muted-foreground text-sm mb-6 max-w-sm">
                        Try adjusting your search or filter to find what you&apos;re
                        looking for.
                    </p>
                    <Button
                        // variant="create"
                        className="rounded-xl"
                        // onClick={() => router.push("/search")}
                    >
                        Clear Filters
                    </Button>
                </div>
            )
        }

        const listClass = `grid gap-3 lg:gap-4 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`
        return (
            <>
                <div className={listClass}>
                    {/* {sortedProducts?.slice(0, visibleProduct).map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            attributes={attributes}
                        />
                    ))} */}
                </div>

                {/* {sortedProducts?.length > visibleProduct && (
                    <div className="mt-10 text-center">
                        <Button
                            onClick={() => setVisibleProduct((prev) => prev + 12)}
                            variant="outline"
                            size="lg"
                            className="min-w-50 rounded-xl"
                        >
                            Load More Products
                        </Button>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Showing {Math.min(visibleProduct, sortedProducts.length)}{" "}
                            of {sortedProducts.length} products
                        </p>
                    </div>
                )} */}
            </>
        )
    }
    return (
        <main className="flex-1 min-w-0">
            {/* Toolbar */}
            <ProductsToolbar />

            {/* Products Grid */}
            {prodsListUi()}
        </main>
    )
}

export default FilteredProducts