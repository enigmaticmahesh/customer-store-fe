import { CreditCard, Gift, PhoneCall, Truck } from "lucide-react";
import { storeCustomizationSetting } from "./temp-data";

const FeatureCard = () => {
    const footer = storeCustomizationSetting.footer;
    const featurePromo = [
        {
            id: 1,
            // title: showingTranslateValue(footer?.shipping_card),
            title: footer.shipping_card.en,

            icon: Truck,
        },
        {
            id: 2,
            // title: showingTranslateValue(footer?.support_card),
            title: footer.support_card.en,

            icon: PhoneCall,
        },
        {
            id: 3,
            // title: showingTranslateValue(footer?.payment_card),
            title: footer.payment_card.en,
            icon: CreditCard,
        },
        {
            id: 4,
            // title: showingTranslateValue(footer?.offer_card),
            title: footer.offer_card.en,
            icon: Gift,
        },
    ];
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mx-auto gap-4">
            {featurePromo.map((promo) => (
                <div
                    key={promo.id}
                    className="py-3 px-4 flex items-center justify-center bg-card rounded-xl border border-border"
                >
                <div className="mr-3">
                    <promo.icon
                    className="shrink-0 h-4 w-4 text-primary"
                    aria-hidden="true"
                    />
                </div>
                <div className="">
                    <span className="block text-sm font-medium leading-5">
                        {promo?.title}
                    </span>
                </div>
                </div>
            ))}
        </div>
    )
}

export default FeatureCard