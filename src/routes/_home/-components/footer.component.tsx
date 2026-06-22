import FeatureCard from "./feature-card.component"
import FooterBottom from "./footer-bottom.component"
import FooterTop from "./footer-top.component"

const Footer = () => {
    return (
        <>
            {/* <FooterTop
              error={error}
              storeCustomizationSetting={storeCustomizationSetting}
            /> */}
            <FooterTop />
            <div className="hidden relative lg:block mx-auto max-w-screen-2xl py-6 px-3 sm:px-10">
              {/* <FeatureCard
                storeCustomizationSetting={storeCustomizationSetting}
              /> */}
              <FeatureCard />
            </div>
            <div className="border-t border-border w-full">
              {/* <Footer
                error={error}
                storeCustomizationSetting={storeCustomizationSetting}
                globalSetting={globalSetting}
              /> */}
              <FooterBottom />
            </div>
        </>
    )
}

export default Footer