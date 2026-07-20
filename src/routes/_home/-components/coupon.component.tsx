import ImageWithFallback from "@/components/custom/image-with-fallback.component";
import { coupons } from "./temp-data";
import { isFutureDate } from "@/core/app-utils/date-utils";
import { formatPriceString } from "@/core/app-utils/string-utils";

const Coupon = ({ couponInHome = false }: { couponInHome: boolean }) => {
  if (couponInHome) {
    return coupons?.slice(0, 2).map((coupon) => {
      return (
        <div
          key={coupon._id}
          className="coupon coupon-home mx-4 my-5 block md:flex lg:flex md:justify-between lg:justify-between items-center bg-background dark:bg-muted rounded-md shadow"
        >
          <div className="tengah py-2 px-3 flex items-center justify-items-start">
            {coupon.logo && (
              <figure>
                <ImageWithFallback
                  src={coupon.logo}
                  width={100}
                  height={100}
                  className="rounded-lg"
                  alt={coupon.title.en}
                />
              </figure>
            )}
            <div className="ml-3">
              <div className="flex items-center">
                <h6 className="pl-1 text-base font-medium text-muted-foreground dark:text-muted-foreground">
                  <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                    {coupon?.discountType?.type === "fixed" ? (
                      <span>${coupon?.discountType?.value}</span>
                    ) : (
                      <span>{coupon?.discountType?.value}%</span>
                    )}
                  </span>{" "}
                  Off
                </h6>
                <div className="ml-2">
                  {isFutureDate(new Date(coupon.endTime), new Date()) ? (
                    <span className="text-red-600 inline-block px-4 py-1 rounded-full font-medium text-xs bg-red-100 dark:bg-red-200">
                      Inactive
                    </span>
                  ) : (
                    <span className="text-primary inline-block px-4 py-1 rounded-full font-medium text-xs bg-accent">
                      Active
                    </span>
                  )}
                </div>
              </div>
              <h2 className="pl-1 text-base text-muted-foreground dark:text-muted-foreground leading-6 font-semibold mb-2">
                {coupon?.title.en}
              </h2>
              {isFutureDate(new Date(coupon.endTime), new Date()) ? (
                <span className="inline-block mb-2">
                  <div className="flex items-center font-semibold">
                    <span className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded">
                      00
                    </span>
                    :
                    <span className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded">
                      00
                    </span>
                    :
                    <span className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded">
                      00
                    </span>
                    :
                    <span className="flex items-center justify-center bg-red-500 text-white text-sm  font-semibold mx-1 px-2 py-1 rounded">
                      00
                    </span>
                  </div>
                </span>
              ) : (
                <span className="inline-block mb-2">
                  <div className="flex items-center font-semibold">
                    {/*<OfferTimer
                      expiryTimestamp={new Date(coupon.endTime)}
                      darkGreen
                    />*/}
                  </div>
                </span>
              )}
            </div>
          </div>
          <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-4">
            <div className="info flex items-center">
              <div className="w-full">
                <div className="block">
                  <div className=" border border-dashed bg-accent py-1 border-primary rounded-lg text-center block">
                    <button className="block w-full">
                      <span className="uppercase  font-semibold text-sm leading-7 text-primary">
                        {coupon.couponCode}
                      </span>
                    </button>
                  </div>
                </div>
                <p className="text-xs leading-4 text-muted-foreground dark:text-muted-foreground mt-2">
                  * This coupon apply when shopping more then{" "}
                  <span className="font-bold">
                    {formatPriceString(coupon.minimumAmount.toString())}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return coupons?.map((coupon) => {
    return (
      <div
        key={coupon._id}
        className="coupon block md:flex lg:flex md:justify-between lg:justify-between items-center bg-background dark:bg-muted rounded-md shadow-sm"
      >
        <div className="tengah p-6 flex items-center justify-items-start">
          {coupon.logo && (
            <figure>
              <ImageWithFallback
                src={coupon.logo}
                width={120}
                height={120}
                className="rounded-lg"
                alt={coupon.title.en}
              />
            </figure>
          )}
          <div className="ml-5">
            {isFutureDate(new Date(coupon.endTime), new Date()) ? (
              <span className="inline-block mb-2">
                <div className="flex items-center font-semibold">
                  <span className="flex items-center justify-center bg-red-100 text-sm dark:text-black  font-semibold px-2 py-1 rounded mx-1">
                    00
                  </span>
                  :
                  <span className="flex items-center justify-center bg-red-100 text-sm dark:text-black  font-semibold px-2 py-1 rounded mx-1">
                    00
                  </span>
                  :
                  <span className="flex items-center justify-center bg-red-100 text-sm dark:text-black  font-semibold px-2 py-1 rounded mx-1">
                    00
                  </span>
                  :
                  <span className="flex items-center justify-center bg-red-100 text-sm dark:text-black  font-semibold px-2 py-1 rounded mx-1">
                    00
                  </span>
                </div>
              </span>
            ) : (
              <span className="inline-block mb-2">
                <div className="flex items-center font-semibold">
                  {/*<OfferTimer expiryTimestamp={new Date(coupon.endTime)} />*/}
                </div>
              </span>
            )}

            <h2 className=" text-lg leading-6 font-medium mb-3">
              {coupon?.title.en}
            </h2>
            <h2 className="pl-1 text-base font-medium text-muted-foreground dark:text-muted-foreground">
              <span className="text-lg md:text-xl lg:text-xl text-red-500 font-bold">
                {coupon?.discountType?.type === "fixed" ? (
                  <span>${coupon?.discountType?.value}</span>
                ) : (
                  <span>{coupon?.discountType?.value}%</span>
                )}
              </span>{" "}
              Off
            </h2>
          </div>
        </div>
        <div className="md:border-l-2 lg:border-l-2 border-dashed lg:w-1/3 md:w-1/3 relative px-6">
          <div className="info flex lg:my-6 md:my-5 mb-6 items-center">
            <div className="w-full">
              <div className="block">
                <div className=" font-medium flex items-center mb-1">
                  <span>Coupon</span>
                  <div className="ml-2">
                    {isFutureDate(new Date(coupon.endTime), new Date()) ? (
                      <span className="text-red-600 inline-block">
                        Inactive
                      </span>
                    ) : (
                      <span className="text-primary inline-block">Active</span>
                    )}
                  </div>
                </div>

                <div className=" border border-dashed bg-accent py-2 border-primary rounded-lg text-center block">
                  <button className="block w-full">
                    <span className="uppercase  font-semibold text-sm leading-7 text-primary">
                      {coupon.couponCode}
                    </span>
                  </button>
                </div>
              </div>
              <p className="text-xs leading-5 dark:text-muted-foreground text-muted-foreground mt-2">
                * This coupon code will apply on when you shopping more then{" "}
                <span className="font-bold text-muted-foreground">
                  {formatPriceString(coupon.minimumAmount.toString())}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Coupon;
