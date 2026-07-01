type DiscountProps = {
  price: number;
  originalPrice: number;
  slug?: boolean;
  modal?: boolean;
};

const DiscountBadge = ({
  price,
  originalPrice,
  slug = false,
  modal = false,
}: DiscountProps) => {
  const discountPercentage =
    originalPrice > 0
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  const regularBadgeClass = modal
    ? "absolute z-10 left-4 top-4 inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset"
    : slug
      ? "inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset"
      : "absolute z-10 right-3 top-3 inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-600 ring-1 ring-red-600/10 ring-inset";

  if (discountPercentage > 1) {
    return <span className={regularBadgeClass}>{discountPercentage}% Off</span>;
  }
  return null;
};

export default DiscountBadge;
