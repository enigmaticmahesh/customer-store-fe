import { formatPriceString } from "@/app-utils/string-utils";

type PriceProps = {
    // product: SortedProd,
    price: string,
    card?: boolean,
    // originalPrice: string
    // campaign: null
}

const Price = ({ price, card = false }: PriceProps) => {
//   const { formatPrice } = useUtilsFunction();

  // When campaign data is present, always use the passed price/originalPrice directly
//   const isCombo = product?.isCombination;
//   const finalPrice = campaign
//     ? price
//     : isCombo
//       ? price
//       : product?.prices?.price;
//   const finalOriginal = campaign ? +originalPrice : +originalPrice;
//   const discountAmount =
//     finalOriginal > finalPrice ? finalOriginal - finalPrice : 0;

    const discountAmount = 0
    const finalPrice = price
    const finalOriginal = price
    return (
        <>
            <div className="product-price font-bold">
                <span
                    className={`${
                    card
                        ? "inline-block text-base text-foreground"
                        : "inline-block text-xl"
                    }`}
                >
                    {formatPriceString(finalPrice)}
                </span>
                {discountAmount > 0 && (
                    <span
                    className={
                        card
                        ? "sm:text-sm font-normal text-base text-muted-foreground ml-1"
                        : "text-sm font-normal text-muted-foreground ml-1"
                    }
                    >
                    <del> {formatPriceString(finalOriginal)}</del>
                    </span>
                )}
            </div>

            {/* {discountAmount > 0 && !card && (
            <p className="text-xs text-primary">
                Save {formatPriceString(discountAmount, currency)} ({discountPercent}% off)
            </p>
            )} */}
        </>
    );
};

export default Price;