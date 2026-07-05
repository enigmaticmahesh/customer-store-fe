import { useNavigate } from "@tanstack/react-router";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import useSearchState from "../-stores/useSearch.store"
import ImageWithFallback from "@/components/custom/image-with-fallback.component";
import ProductStock from "@/components/custom/product-stock.component";
import Rating from "@/components/custom/product-rating.component";
import Price from "@/components/custom/product-price.component";
import { Eye, ShoppingBag } from "lucide-react";
import { useStore, type StoreApi } from "zustand";
import type { BaseProdStoreContract } from "@/interfaces/common-prod-list.interface";
import type { AtLeastOne, Product } from "@/interfaces/app-global.interface";
import DiscountBadge from "../discount-badge.component";
import { getImgUrl } from "@/app-utils/img-utils";
import useCart from "@/stores/cart.store";

type StoreType = AtLeastOne<BaseProdStoreContract> & {
  quickViewProd: Product | null;
};

type ProductQuickViewProps = {
  store: StoreApi<StoreType>;
};

const QuickViewProduct = ({ store }: ProductQuickViewProps) => {
  // Adding "!" so that product will be available for sure
  // const product = useSearchState((state) => state.quickViewProd!);
  const product = useStore(store, (state) => state.quickViewProd!);
  const navigate = useNavigate();
  const updateStore = useStore(
    store,
    (state) => state.updateStore || state.updateProdListStore,
  );
  const addToCart = useCart((state) => state.addToCart);
  const prodId = useCart(
    (state) => state.cartItemsTracker.get(product.id.toString())?.id,
  );
  // const decQty = useCart((state) => state.decQty);
  // const incQty = useCart((state) => state.incQty);
  // const itemQty = useCart(
  //   (state) => state.cartItemsTracker.get(product.id.toString())?.qty ?? 0,
  // );

  // const handleInc = () => {
  //   incQty(product.id.toString());
  // };
  // const handleDec = () => {
  //   decQty(product.id.toString());
  // };
  const handleAddToCart = () => {
    addToCart(product);
  };
  const viewDetails = () => {
    updateStore!({ quickView: false });
    navigate({
      to: "/product/$productId",
      params: { productId: product.id.toString() },
      viewTransition: true,
    });
  };

  const stockUi = () => {
    const stock = Number(product.qty);
    if (!stock) return null;

    const stockClass = stock <= 0 ? "relative py-1 mb-2" : "relative";
    return (
      <div className={stockClass}>
        <ProductStock stock={stock} />
      </div>
    );
  };

  return (
    <div>
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      {/* <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
                    <div className="relative rounded-xl bg-background shadow-lg"> */}
      <div className="overflow-y-auto max-h-[90vh] p-5">
        <div className="inline-block overflow-y-auto h-full w-full align-middle transition-all transform">
          {/* <div> */}
          <div className="lg:flex flex-col lg:flex-row md:flex-row w-full max-w-4xl overflow-hidden justify-between">
            {/* <div> */}
            {/* <Link
                                        to="/"
                                        viewTransition
                                    //   href={`/product/${product.slug}`}
                                    //   passHref
                                    className="w-full lg:w-[40%]"
                                    >
                                    <div
                                        // onClick={() => setModalOpen(false)}
                                        className="shrink-0 flex items-center justify-center h-auto cursor-pointer"
                                    >
                                        <ImageWithFallback src={product?.image?.[0]} />
                                    </div>
                                    </Link> */}
            {/* <div className="shrink-0 flex items-center justify-center h-auto cursor-pointer">
                                        <div className="w-full lg:w-[40%]">
                                            <ImageWithFallback src={product?.image?.[0]} width={420} height={420} />
                                        </div>
                                    </div> */}
            <div className="w-full lg:w-[40%]">
              <ImageWithFallback
                src={getImgUrl(product.sku, product.id, 1)}
                width={420}
                height={420}
              />
            </div>
            <div className="w-full pt-6 lg:pt-0 lg:pl-7 xl:pl-10 flex flex-col">
              <div className="mb-2 md:mb-2.5 block -mt-1.5">
                {stockUi()}
                {/* <Link href={`/product/${product.slug}`}>
                                            <h2
                                                onClick={() => setModalOpen(false)}
                                                className="text-foreground text-lg md:text-xl lg:text-xl font-medium hover:text-primary cursor-pointer"
                                            >
                                                {showingTranslateValue(product?.title)}
                                            </h2>
                                            </Link> */}
                {/*<Link
                  to="/product/$productId"
                  params={{ productId: product.id.toString() }}
                >
                  <h2 className="text-foreground text-lg md:text-xl lg:text-xl font-medium hover:text-primary cursor-pointer">
                    {product.name}
                  </h2>
                </Link>*/}
                <h2 className="text-foreground text-lg md:text-xl lg:text-xl font-medium hover:text-primary capitalize">
                  {product.name}
                </h2>
                <div className="flex gap-0.5 items-center mt-1">
                  {/* Rating */}
                  <Rating
                    size="md"
                    showReviews={true}
                    rating={3.75}
                    totalReviews={8}
                  />
                </div>
              </div>
              <p className="text-sm leading-6 text-muted-foreground md:leading-6">
                {/* {showingTranslateValue(product?.description)} */}
                {/*{product?.description?.en}*/}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since 1966, when designers at Letraset and James
                Mosley, the librarian at St Bride Printing Library in London,
                took a 1914 Cicero translation and scrambled it to make dummy
                text for Letraset's Body Type sheets. It has survived not only
                many decades, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised thanks to
                these sheets and more recently with desktop publishing software
                like Aldus PageMaker and Microsoft Word including versions of
                Lorem Ipsum.
              </p>
              <div className="flex items-center my-4 mt-auto">
                <Price
                  price={Number(product.mrp)}
                  originalPrice={Number(product.price) + 1}
                  card={false}
                />
                <span className="ml-2">
                  <DiscountBadge
                    // product={product}
                    slug
                    price={Number(product.mrp)}
                    originalPrice={Number(product.price) + 1}
                  />
                </span>
              </div>
              {/* {isInCampaign && campaign && (
                                        <div className="mb-4 px-3 py-2 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                                        <div className="flex items-center gap-2 text-xs font-semibold text-red-600 dark:text-red-400">
                                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                            Campaign Deal — Only {campaign.campaignRemainingStock} left!
                                        </div>
                                        </div>
                                    )} */}
              {/* <div className="mb-6">
                                        {variantTitle?.map((a, i) => (
                                        <span key={a._id} className="mb-2 block">
                                            <h4 className="text-sm py-1 text-foreground font-medium">
                                            {showingTranslateValue(a?.name)}:
                                            </h4>
                                            <VariantList
                                            att={a._id}
                                            option={a.option}
                                            setValue={setValue}
                                            varTitle={variantTitle}
                                            variants={product?.variants}
                                            setSelectVa={setSelectVa}
                                            selectVariant={selectVariant}
                                            setSelectVariant={setSelectVariant}
                                            />
                                        </span>
                                        ))}
                                    </div> */}
              {/*<div className="flex items-center mt-4">*/}
              <div className="w-full grid lg:grid-cols-3 sm:grid-cols-3 gap-3">
                {/*<div className="group flex items-center justify-between rounded-md overflow-hidden shrink-0 border border-border">
                    <button
                      onClick={handleDec}
                      //   disabled={item === 1}
                      className="flex items-center cursor-pointer justify-center py-2 px-4 h-full shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-foreground border-e border-border hover:text-muted-foreground"
                    >
                      <span className="text-xl">
                        <Minus className="size-4.5" />
                      </span>
                    </button>
                    <p className="font-semibold text-sm">
                      {itemQty}
                    </p>
                    <button
                      onClick={handleInc}
                      className="flex items-center cursor-pointer justify-center py-2 px-4 h-full shrink-0 transition ease-in-out duration-300 focus:outline-none w-8 md:w-12 text-foreground border-s border-border hover:text-muted-foreground"
                    >
                      <span className="text-xl">
                        <Plus className="size-4.5" />
                      </span>
                    </button>
                  </div>*/}
                <button
                  onClick={handleAddToCart}
                  className="w-full text-sm flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-primary-foreground py-2 px-4 bg-primary hover:bg-primary/90 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
                  disabled={Boolean(prodId)}
                >
                  <ShoppingBag className="mr-2 size-4.5" />
                  Add to cart
                </button>
                <button
                  onClick={viewDetails}
                  className="w-full relative h-auto flex items-center font-semibold text-sm text-foreground justify-center rounded-md transition-colors py-2 px-4 border border-border bg-card hover:bg-accent hover:text-primary"
                >
                  <Eye className="mr-2 size-4.5" />
                  View details
                </button>
              </div>
              {/*</div>*/}
              {/* <div className="flex items-center mt-4">
                                        <div className="flex items-center justify-between space-s-3 sm:space-s-4 w-full">
                                        <div>
                                            <span className=" font-semibold py-1 text-sm d-block">
                                            <span className="text-muted-foreground">Category</span>{" "}
                                            <Link
                                                href={`/search?category=${category_name}&_id=${product?.category?._id}`}
                                                className="cursor-pointer"
                                            >
                                                <button
                                                type="button"
                                                className="text-muted-foreground font-medium ml-2 hover:text-primary"
                                                onClick={() => setIsLoading(!isLoading)}
                                                >
                                                {category_name}
                                                </button>
                                            </Link>
                                            </span>
                                            <Tags product={product} />
                                        </div>
                                        </div>
                                    </div> */}
              {/* <div className="flex items-center text-sm text-muted-foreground border-t border-border pt-4 mt-4">
                                        <FiHeadphones className="mr-1 text-muted-foreground text-md" />
                                        Call Us for Order
                                        <a
                                        href={`tel:${globalSetting?.contact || "+099949343"}`}
                                        className="font-bold text-primary ml-1"
                                        >
                                        {globalSetting?.contact || "+099949343"}
                                        </a>
                                    </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* </div>
                </div>
            </div> */}
    </div>
  );
};

export default QuickViewProduct;
