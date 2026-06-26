import Coupon from "./coupon.component";
import { storeCustomizationSetting } from "./temp-data";

const OfferCard = () => {
  return (
    <div className="w-full group">
      <div className="bg-card h-full border border-primary/30 transition duration-150 ease-linear transform group-hover:border-primary rounded-xl shadow-sm overflow-hidden">
        <div className="bg-primary/10 dark:bg-primary/20 text-foreground px-6 py-2 border-b border-primary/20 flex items-center justify-center">
          <h3 className="text-base font-medium">
            {storeCustomizationSetting?.home?.discount_title.en}
          </h3>
        </div>
        <div className="overflow-hidden">
          <Coupon couponInHome />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
