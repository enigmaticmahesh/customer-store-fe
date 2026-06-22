
const HeroSection = () => {
    return (
        <div className="bg-background">
            <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
                <div className="flex w-full">
                    {/* Home page main carousel */}
                    <div className="shrink-0 xl:pr-6 lg:block w-full lg:w-3/5">
                        {/* <Suspense fallback={<p>Loading carousel...</p>}>
                        </Suspense> */}
                        {/* <MainCarousel /> */}
                    </div>
                    {/* Coupon Offer Card */}
                    <div className="w-full hidden lg:flex ">
                        {/* <Suspense fallback={<p>Loading coupons...</p>}>
                        </Suspense> */}
                        {/* <OfferCard /> */}
                    </div>
                </div>

                {/* Banner */}
                <div className="bg-primary/10 dark:bg-primary/5 px-10 py-6 rounded-xl mt-6 border border-primary/10">
                    {/* <Banner storeCustomizationSetting={storeCustomizationSetting} /> */}
                </div>
            </div>
        </div>
    )
}

export default HeroSection