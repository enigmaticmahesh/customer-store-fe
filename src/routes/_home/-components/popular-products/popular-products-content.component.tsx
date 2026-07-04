import ProductCard from "@/components/custom/product/product-card.component";
import { storeCustomizationSetting } from "../temp-data";
import usePopularProductsStore from "./popular-products.store";
// import type { PopularProd } from "./temp.data";
import { useFetchPopularProds } from "../../-queries/get-popular-prod.query";
import type { Product } from "@/interfaces/app-global.interface";

const PopularProductsContent = () => {
  // const popularProducts = usePopularProductsStore((state) => state.products);
  // createStoreSubscriber(usePopularProductsStore)
  const { data: popularProducts } = useFetchPopularProds();

  const prodsListUi = popularProducts.map((product: Product) => (
    <ProductCard
      key={product.id}
      product={product}
      store={usePopularProductsStore}
      // attributes={attributes}
    />
  ));

  return (
    storeCustomizationSetting?.home?.popular_products_status && (
      <div className="bg-background lg:py-16 py-10">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="mb-10 flex justify-center">
            <div className="text-center w-full lg:w-2/5">
              <h2 className="text-xl lg:text-2xl mb-2 font-semibold text-foreground">
                {/*<CMSkeletonTwo
                  count={1}
                  height={30}
                  loading={false}
                  error={storeCustomizationError}
                  data={storeCustomizationSetting?.home?.popular_title}
                />*/}
                {storeCustomizationSetting?.home?.popular_title.en}
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-6">
                {/*<CMSkeletonTwo
                  count={5}
                  height={10}
                  loading={false}
                  error={storeCustomizationError}
                  data={storeCustomizationSetting?.home?.popular_description}
                />*/}
                {storeCustomizationSetting?.home?.popular_description.en}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                {/*{popularProducts
                  ?.slice(
                    0,
                    storeCustomizationSetting?.home
                      ?.latest_discount_product_limit,
                  )
                  .map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                      attributes={attributes}
                    />
                  ))}*/}
                {prodsListUi}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PopularProductsContent;
