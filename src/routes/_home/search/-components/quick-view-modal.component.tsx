import useSearchState from "../-stores/useSearch.store";
import QuickViewModal from "@/components/custom/product/quick-view-prod-modal.component";

const SearchQuickViewModal = () => {
  return <QuickViewModal store={useSearchState} />;
};

export default SearchQuickViewModal;
