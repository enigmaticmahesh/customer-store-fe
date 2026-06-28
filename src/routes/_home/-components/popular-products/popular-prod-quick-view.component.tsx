import QuickViewModal from "@/components/custom/product/quick-view-prod-modal.component";
import usePopularProductsStore from "./popular-products.store";

const PopularProductQuickViewModal = () => {
  return <QuickViewModal store={usePopularProductsStore} />;
};

export default PopularProductQuickViewModal;
