import { Link } from "@tanstack/react-router";
import ImageWithFallback from "../image-with-fallback.component";
import { Expand } from "lucide-react";
import Rating from "../product-rating.component";
import Price from "../product-price.component";
import AddToCartBtn from "../cart/add-to-cart-btn.component";
import { useStore, type StoreApi } from "zustand";
import type { AtLeastOne } from "@/schemas/app-general.schema";
import type { BaseProdStoreContract } from "@/schemas/app-global-stores.schema";

type ProductCardProps = {
  product: any;
  // openQuickView: () => void;
  store: StoreApi<AtLeastOne<BaseProdStoreContract>>;
};

const ProductCard = ({ product, store }: ProductCardProps) => {
  // const updateStore = useSearchState((state) => state.updateStore);
  const updateStore = useStore(
    store,
    (state) => state.updateStore || state.updateProdListStore,
  );

  const openQuickView = () => {
    if (!updateStore) return;
    updateStore({ quickView: true, quickViewProd: product });
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 ">
      {/* <div className="w-full flex justify-between">
                <Discount product={product} />
            </div> */}
      <div className="relative w-full min-h-48 lg:h-48 xl:h-52">
        <Link
          // href={`/product/${product?.slug}`}
          to="/"
          className="relative block w-full h-full overflow-hidden bg-muted"
        >
          <ImageWithFallback
            // fill
            sizes="100%"
            alt="product"
            src={product.image?.[0]}
          />
        </Link>
        <div className="absolute lg:bottom-0 bottom-4 lg:group-hover:bottom-4 inset-x-1 opacity-100 flex justify-center lg:opacity-0 lg:invisible group-hover:opacity-100 group-hover:visible transition-all">
          <button
            aria-label="quick view"
            // onClick={() => {
            //     handleModalOpen(!modalOpen, product._id);
            //     handleLogEvent(
            //         "product",
            //         `opened ${showingTranslateValue(
            //         product?.title,
            //         )} product modal`,
            //     );
            // }}
            onClick={openQuickView}
            className="relative h-auto inline-flex items-center cursor-pointer justify-center rounded-full transition-colors text-xs py-2 px-4 bg-background text-muted-foreground dark:bg-background dark:text-muted-foreground hover:text-primary hover:bg-muted dark:hover:bg-accent shadow-lg focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-primary dark:focus:ring-offset-0"
          >
            <Expand className="size-3" />
            <span className="ms-1 hidden xl:block lg:block">Quick View</span>
          </button>
        </div>

        <div className="absolute bottom-3 right-3 z-5 flex items-center justify-center rounded-full bg-background text-muted-foreground shadow-lg transition-all duration-300 ease-in-out hover:bg-muted hover:text-primary">
          <AddToCartBtn product={product} />
        </div>
      </div>

      {/* product info start */}
      <div className="flex flex-1 flex-col space-y-2 px-4 pt-2 pb-4">
        <div className="relative mb-1">
          <Link
            // href={`/product/${product?.slug}`}
            to="/"
            className="text-sm font-medium text-foreground line-clamp-1 hover:text-primary"
          >
            {/* {showingTranslateValue(product?.title)} */}
            {product?.title?.en}
          </Link>
        </div>
        <div className="flex gap-0.5 items-center">
          <Rating
            size="md"
            showReviews={true}
            rating={product?.average_rating}
            totalReviews={product?.total_reviews}
          />
        </div>

        <Price
          card
          // product={product}
          price={product?.prices?.price.toString()}
          // originalPrice={effectiveOriginalPrice}
          // campaign={isInCampaign ? campaign : null}
        />

        {/* Campaign sold bar */}
        {/* {isInCampaign && (
                <div>
                    <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-0.5">
                    <span>{campaign.campaignSoldCount || 0} Sold</span>
                    <span>
                        {campaign.campaignSoldCount || 0}/
                        {campaign.campaignStockLimit}
                    </span>
                    </div>
                    <div className="relative w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                        className="absolute top-0 left-0 h-full bg-orange-500 rounded-full transition-all duration-500"
                        style={{
                        width: `${campaign.campaignStockLimit > 0 ? Math.min(Math.round(((campaign.campaignSoldCount || 0) / campaign.campaignStockLimit) * 100), 100) : 0}%`,
                        }}
                    />
                    </div>
                </div>
                )} */}
      </div>
      {/* product info end */}
    </div>
  );
};

export default ProductCard;
