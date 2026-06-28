import { useStore, type StoreApi } from "zustand";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import QuickViewProduct from "./quick-view-product.component";
import type { AtLeastOne } from "@/schemas/app-general.schema";
import type { BaseProdStoreContract } from "@/schemas/app-global-stores.schema";

type StoreType = AtLeastOne<BaseProdStoreContract> & {
  quickView: boolean;
  quickViewProd: any | null;
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
    if (!updateStore) return;
    updateStore({ quickView: state });
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
