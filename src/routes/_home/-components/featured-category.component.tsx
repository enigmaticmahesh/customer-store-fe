import ImageWithFallback from "@/components/custom/image-with-fallback.component";
import {
  categories,
  storeCustomizationSetting,
  type Category,
} from "./temp-data";
import CategoryNavBtn from "./category-nav-btn.component";

const FeaturedCategory = () => {
  const catImage = (category: Category) => {
    if (category.icon) {
      return (
        <ImageWithFallback
          src={category?.icon}
          alt="category"
          // width={35}
          // height={35}
          className="w-15"
        />
      );
    }

    return (
      <ImageWithFallback
        src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
        alt="category"
        width={35}
        height={35}
      />
    );
  };
  const categoriesUi = categories[0]?.children?.map((category, i) => (
    <li className="group" key={i + 1}>
      <div className="flex w-full h-full rounded-xl border border-border bg-card p-4 cursor-pointer transition duration-200 ease-linear transform group-hover:shadow-md group-hover:border-primary/40">
        <div className="flex items-center">
          <div>{catImage(category)}</div>

          {/*<CategoryNavigateButton
            category={{
              ...category,
              name: category.name,
              description: category.description,
            }}
            // showingTranslateValue={showingTranslateValue}
          />*/}
          <CategoryNavBtn
            category={{
              ...category,
              name: category.name,
              description: category.description,
            }}
          />
        </div>
      </div>
    </li>
  ));

  return (
    storeCustomizationSetting?.home?.featured_status && (
      <div className="bg-muted/50 dark:bg-muted/30 lg:py-16 py-10 border-y border-border/50">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="mb-10 flex justify-center">
            <div className="text-center w-full lg:w-2/5">
              <h2 className="text-xl lg:text-2xl mb-2 font-semibold text-foreground">
                {/*<CMSkeletonTwo
                count={1}
                height={30}
                loading={false}
                error={storeCustomizationError}
                data={storeCustomizationSetting?.home?.feature_title}
              />*/}
                {storeCustomizationSetting?.home?.feature_title.en}
              </h2>
              <p className="text-base text-muted-foreground leading-6">
                {/*<CMSkeletonTwo
                count={4}
                height={10}
                loading={false}
                error={storeCustomizationError}
                data={storeCustomizationSetting?.home?.feature_description}
              />*/}
                {storeCustomizationSetting?.home?.feature_description.en}
              </p>
            </div>
          </div>

          {/*<Suspense fallback={<p>Loading feature category...</p>}>
          <FeatureCategory />
        </Suspense>*/}
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-3">
            {categoriesUi}
          </ul>
        </div>
      </div>
    )
  );
};

export default FeaturedCategory;
