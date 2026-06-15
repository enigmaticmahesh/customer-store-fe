import { createFileRoute, Link } from '@tanstack/react-router'
import { ChevronRight, Home } from 'lucide-react'
import CategoriesPills from './-components/categories-pills.component'
import FilterSidebar from './-components/filter-sidebar.component'
import FilteredProducts from './-components/filtered-products.component'

const PageHeader = () => {
    return (
        <div className="bg-muted/50 border-b border-border">
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 py-8 lg:py-12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                    {/* {searchQuery ? (
                        <>Results for &ldquo;{searchQuery}&rdquo;</>
                    ) : (
                        "All Products"
                    )} */}
                    All Products
                </h1>
                <nav className="flex items-center gap-1.5 mt-3 text-sm text-muted-foreground">
                    <Link
                        to="/"
                        className="flex items-center gap-1 hover:text-primary transition-colors"
                    >
                        <Home className="w-3.5 h-3.5" />
                        <span>Home</span>
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span className="text-foreground font-medium">Search</span>
                </nav>
            </div>
        </div>
    )
}

const SearchProducts = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <PageHeader />
            {/* ═══ Sticky Category Pills ═══ */}
            <CategoriesPills />

            <div className="relative z-10 -mt-4 sm:-mt-6 mx-auto max-w-screen-2xl px-4 py-6 lg:py-8 sm:px-6 lg:px-8">
                <div className="flex gap-6 lg:gap-8 min-h-[60vh]">
                    <FilterSidebar />

                    {/* Main Content */}
                    <FilteredProducts />
                </div>
            </div>
        </div>
    )
}

export const Route = createFileRoute('/_home/search/')({
  component: SearchProducts,
})
