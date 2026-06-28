import { Grid2x2, List, ListFilter } from "lucide-react";
import useSearchState from "../-stores/useSearch.store";
import type { ChangeEvent } from "react";

const ProductsToolbar = () => {
  const updateStore = useSearchState((state) => state.updateStore);
  const viewMode = useSearchState((state) => state.viewMode);
  const sortedProducts = useSearchState((state) => state.products);
  const sortBy = useSearchState((state) => state.sortBy);

  const toggleFilters = (toggle: boolean) => () =>
    updateStore({ showFilters: toggle });
  const toggleViewMode = (mode: "grid" | "list") => () =>
    updateStore({ viewMode: mode });
  const handleSort = (e: ChangeEvent<HTMLSelectElement>) =>
    updateStore({ sortBy: e.target.value });

  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-card p-3 border border-border">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleFilters(true)}
          className="flex items-center gap-2 rounded-xl border border-border px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 lg:hidden transition-all"
        >
          <ListFilter className="h-4 w-4" />
          Filters
        </button>

        <div className="hidden items-center gap-0.5 rounded-xl border border-border p-1 sm:flex">
          <button
            onClick={toggleViewMode("grid")}
            className={`rounded-lg p-2 transition-all ${viewMode === "grid" ? "bg-primary/10 text-primary shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
          >
            <Grid2x2 className="h-4 w-4" />
          </button>
          <button
            onClick={toggleViewMode("list")}
            className={`rounded-lg p-2 transition-all ${viewMode === "list" ? "bg-primary/10 text-primary shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}
          >
            <List className="h-4 w-4" />
          </button>
        </div>

        <span className="text-sm text-muted-foreground hidden sm:inline">
          {sortedProducts?.length || 0} results
        </span>
      </div>

      <div className="flex items-center gap-2.5">
        <span className="text-sm text-muted-foreground hidden sm:inline">
          Sort by:
        </span>
        <select
          value={sortBy}
          onChange={handleSort}
          className="rounded-xl border border-border bg-background px-3.5 py-2 text-sm font-medium focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer"
        >
          <option value="default">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsToolbar;
