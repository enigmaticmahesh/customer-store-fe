import { useStore, type StoreApi } from "zustand";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import QuickViewProduct from "./quick-view-product.component";
import type { BaseProdStoreContract } from "@/interfaces/common-prod-list.interface";
import type { AtLeastOne, Product } from "@/interfaces/app-global.interface";

type StoreType = AtLeastOne<BaseProdStoreContract> & {
  quickView: boolean;
  quickViewProd: Product | null;
};

type ProductQuickViewModalProps = {
  store: StoreApi<StoreType>;
};

const QuickViewModal = ({ store }: ProductQuickViewModalProps) => {
  const quickView = useStore(store, (state) => state.quickView);
  const updateStore = useStore(
    store,
    (state) => state.updateStore || state.updateProdListStore,
  );

  const handleOpen = (state: boolean) => {
    // Adding "!" so that "updateStore" will be available for sure as we have applied "AtleastOne"
    updateStore!({ quickView: state });
    // if (!state) {
    //     resetStore() // Reset store when dialog closes
    // }
  };

  return (
    <Dialog open={quickView} onOpenChange={handleOpen}>
      <DialogContent className="min-w-[75vw] w-full">
        <QuickViewProduct store={store} />
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
