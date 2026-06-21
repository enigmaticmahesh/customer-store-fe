import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import useSearchState from "../-stores/useSearch.store"
import QuickViewProduct from "./quick-view-product.component"

const QuickViewModal = () => {
    const quickView = useSearchState(state => state.quickView)
    const updateStore = useSearchState(state => state.updateStore)

    const handleOpen = (state: boolean) => {
        updateStore({quickView: state})
        // if (!state) {
        //     resetStore() // Reset store when dialog closes
        // }
    }

    return (
        <Dialog open={quickView} onOpenChange={handleOpen}>
            <DialogContent className="min-w-[75vw] w-full">
                <QuickViewProduct />
            </DialogContent>
        </Dialog>
    )
}

export default QuickViewModal