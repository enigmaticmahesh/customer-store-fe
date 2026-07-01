import ProductCard from "@/components/custom/product/product-card.component";
import { storeCustomizationSetting } from "../temp-data";
import useDiscountedProductsStore from "./discounted-products.store";
import { discountedProducts } from "./temp.data";

import QuickViewModal from "@/components/custom/product/quick-view-prod-modal.component";

const DiscountedProductQuickViewModal = () => {
  return <QuickViewModal store={useDiscountedProductsStore} />;
};

// export default DiscountedProductQuickViewModal;

const DiscountedProductsContent = () => {
  const prodsListUi = discountedProducts
    ?.slice(0, storeCustomizationSetting?.home?.popular_product_limit)
    .map((product) => (
      <ProductCard
        key={product._id}
        product={product}
        // attributes={attributes}
        store={useDiscountedProductsStore}
        showDiscount={true}
      />
    ));

  return (
    storeCustomizationSetting?.home?.discount_product_status &&
    discountedProducts?.length > 0 && (
      <div
        id="discount"
        className="bg-muted/50 dark:bg-muted/30 lg:py-16 py-10 border-t border-border/50"
      >
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="mb-10 flex justify-center">
            <div className="text-center w-full lg:w-2/5">
              <h2 className="text-xl lg:text-2xl mb-2 font-semibold text-foreground">
                {/*<CMSkeletonTwo
                  count={1}
                  height={30}
                  loading={false}
                  error={storeCustomizationError}
                  data={
                    storeCustomizationSetting?.home?.latest_discount_title
                  }
                />*/}
                {storeCustomizationSetting?.home?.latest_discount_title.en}
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-6">
                {/*<CMSkeletonTwo
                  count={5}
                  height={20}
                  loading={false}
                  error={storeCustomizationError}
                  data={
                    storeCustomizationSetting?.home
                      ?.latest_discount_description
                  }
                />*/}
                {
                  storeCustomizationSetting?.home?.latest_discount_description
                    .en
                }
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                {prodsListUi}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const DiscountedProducts = () => {
  return (
    <>
      <DiscountedProductQuickViewModal />
      <DiscountedProductsContent />
    </>
  );
};

export default DiscountedProducts;
