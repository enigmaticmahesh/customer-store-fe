import { useNavigate } from "@tanstack/react-router"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import useSearchState from "../-stores/useSearch.store"

const CategoriesPills = () => {
    const navigate = useNavigate()
    const categories = useSearchState(state => state.topCategories)
    const selectedCategory = useSearchState(state => state.selectedCategory) // TODO: We will be using query param to maintain this page state
    const updateStore = useSearchState(state => state.updateStore)

    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false);
    // const [mounted, setMounted] = useState(false);
    // const [selectedCategory, setSelectedCategory] = useState('') // TODO: We will be using query param to maintain this page state
    const categoryScrollRef = useRef<HTMLDivElement>(null);

    const scrollCategoriesLeft = () => {
        categoryScrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollCategoriesRight = () => {
        categoryScrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
    };

    const handleCategoryClick = (categoryId: string) => {
        updateStore({selectedCategory: categoryId})
    }

    // useEffect(() => setMounted(true), []);

    useEffect(() => {
        const controller = new AbortController()
        // Delay to ensure DOM is rendered
        // if (!mounted) return

        const checkScroll = () => {
            const el = categoryScrollRef.current;
            if (el) {
                const maxScroll = el.scrollWidth - el.clientWidth;
                setCanScrollRight(maxScroll > 0 && el.scrollLeft < maxScroll - 2);
                setCanScrollLeft(el.scrollLeft > 2);
            }
        }

        const el = categoryScrollRef.current;
        if (el) {
            el.addEventListener("scroll", checkScroll, {signal: controller.signal});
            window.addEventListener("resize", checkScroll, {signal: controller.signal});
            checkScroll()
        }

        return () => {
            controller.abort()
        }
    }, []);

    const leftArrowUi = () => {
        const btnClass = () => {
            const canScroll = canScrollLeft
                    ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:scale-105 border-primary cursor-pointer"
                    : "bg-muted/50 text-muted-foreground/40 border-border/40 cursor-default"
            return `shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 ${canScroll}`
        }
        return (
            <button
                onClick={scrollCategoriesLeft}
                disabled={!canScrollLeft}
                className={btnClass()}
                aria-label="Scroll categories left"
            >
                <ChevronLeft className="h-4 w-4" />
            </button>
        )
    }

    const rightArrowUi = () => {
        const btnClass = () => {
            const canScroll = canScrollRight
                    ? "bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:scale-105 border-primary cursor-pointer"
                    : "bg-muted/50 text-muted-foreground/40 border-border/40 cursor-default"
            return `shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-200 ${canScroll}`
        }
        return (
            <button
                onClick={scrollCategoriesRight}
                disabled={!canScrollRight}
                className={btnClass()}
                aria-label="Scroll categories right"
            >
                <ChevronRight className="h-4 w-4" />
            </button>
        )
    }

    const leftFadeUi = canScrollLeft && <div className="absolute left-0 top-0 bottom-0 w-6 bg-linear-to-r from-background/95 to-transparent z-10 pointer-events-none" />
    const rightFadeUi = canScrollRight && <div className="absolute right-0 top-0 bottom-0 w-6 bg-linear-to-l from-background/95 to-transparent z-10 pointer-events-none" />

    const allBtnUi = () => {
        const handleClick = () => {
            navigate({to: '/search', viewTransition: true})
        }
        const btnClass = () => {
            const isSelected = !selectedCategory
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                : "bg-primary/5 dark:bg-primary/10 text-primary hover:bg-primary/10 dark:hover:bg-primary/20 border border-primary/20"
            return `shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${isSelected}`
        }
        return (
            <button
                onClick={handleClick}
                className={btnClass()}
            > All </button>
        )
    }

    return (
        <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-mds">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center gap-1">
              {/* Left Arrow */}
              {leftArrowUi()}

              {/* Scrollable categories */}
              <div className="relative flex-1 overflow-hidden">
                {/* Left fade */}
                {leftFadeUi}

                <div ref={categoryScrollRef} className="flex items-center gap-2 py-3 overflow-x-auto no-scrollbar" >
                  {allBtnUi()}
                  {categories.map((cat) => (
                    <button
                      key={cat._id}
                      onClick={() => handleCategoryClick(cat._id)}
                      className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                        selectedCategory === cat._id
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                          : "bg-primary/5 dark:bg-primary/10 text-primary hover:bg-primary/10 dark:hover:bg-primary/20 border border-primary/20"
                      }`}
                    >
                      {cat.icon && (
                        <img src={cat.icon} alt="" width={14} height={14} className="rounded-sm object-contain" />
                      )}
                      {/* {showingTranslateValue(cat.name)} */}
                      {cat.name.en}
                    </button>
                  ))}
                </div>
                {/* Right fade */}
                {rightFadeUi}
              </div>

              {/* Right Arrow */}
              {rightArrowUi()}
            </div>
          </div>
        </div>
    )
}

export default CategoriesPills