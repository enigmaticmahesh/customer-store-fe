import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { storeCustomizationSetting } from "./temp-data";
import ImageWithFallback from "@/components/custom/image-with-fallback.component";
import { Link } from "@tanstack/react-router";

const slider = storeCustomizationSetting?.slider;
console.log({ slider });

const MainCarousel = () => {
  // const cookieStore = await cookies();
  // const lang = cookieStore.get("_lang")?.value || "en";
  const lang = "en";
  const showingTranslateValue = (data: { en: string }) => {
    if (!data) return "";
    return data !== undefined && Object?.keys(data).includes(lang)
      ? data[lang]
      : data?.en || "";
  };
  const showingUrl = (data: string) => (data !== undefined ? data : "!#");
  const showingImage = (data: string) => data !== undefined && data;

  const sliderData = [
    {
      id: 1,

      title: showingTranslateValue(slider?.first_title),
      info: showingTranslateValue(slider?.first_description),
      buttonName: showingTranslateValue(slider?.first_button),
      url: showingUrl(slider?.first_link),
      image: showingImage(slider?.first_img) || "/slider/slider-1.jpg",
    },
    {
      id: 2,
      title: showingTranslateValue(slider?.second_title),
      info: showingTranslateValue(slider?.second_description),
      buttonName: showingTranslateValue(slider?.second_button),
      url: showingUrl(slider?.second_link),
      image: showingImage(slider?.second_img) || "/slider/slider-2.jpg",
    },
    {
      id: 3,
      title: showingTranslateValue(slider?.third_title),
      info: showingTranslateValue(slider?.third_description),
      buttonName: showingTranslateValue(slider?.third_button),
      url: showingUrl(slider?.third_link),
      image: showingImage(slider?.third_img) || "/slider/slider-3.jpg",
    },
    {
      id: 4,
      title: showingTranslateValue(slider?.four_title),
      info: showingTranslateValue(slider?.four_description),
      buttonName: showingTranslateValue(slider?.four_button),
      url: showingUrl(slider?.four_link),
      image: showingImage(slider?.four_img) || "/slider/slider-1.jpg",
    },
    {
      id: 5,
      title: showingTranslateValue(slider?.five_title),
      info: showingTranslateValue(slider?.five_description),
      buttonName: showingTranslateValue(slider?.five_button),
      url: showingUrl(slider?.five_link),
      image: showingImage(slider?.five_img) || "/slider/slider-2.jpg",
    },
  ];

  const sliderDataUi = sliderData?.map((item, i) => (
    <SwiperSlide
      className="h-full relative rounded-lg overflow-hidden dark:bg-background"
      key={i + 1}
    >
      <div className="text-sm text-muted-foreground hover:text-primary dark:bg-background">
        <ImageWithFallback
          // width={950}
          // height={400}
          src={item.image}
          alt={item.title}
          className="object-cover w-full h-100 rounded-2xl"
          // priority
        />
      </div>
      <div className="absolute top-0 left-0 z-10 p-r-16 flex-col flex w-full h-full place-items-start justify-center">
        <div className="pl-4 pr-12 sm:pl-10 sm:pr-16 w-10/12 lg:w-8/12 xl:w-7/12">
          <h1 className="mb-2  text-xl sm:text-lg md:text-2xl line-clamp-1 md:line-clamp-none  lg:line-clamp-none  lg:text-3xl font-bold text-foreground">
            {item.title}
          </h1>
          <p className="text-base leading-6 text-muted-foreground font-sans line-clamp-1  md:line-clamp-none lg:line-clamp-none">
            {item.info}
          </p>
          <Link
            to={item.url}
            className="hidden sm:inline-block lg:inline-block text-sm leading-6 font-medium mt-6 px-6 py-2 bg-primary text-center rounded-lg text-primary-foreground hover:bg-primary/90 transition-colors"
            viewTransition
          >
            {item.buttonName}
          </Link>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={
        (storeCustomizationSetting?.slider?.bottom_dots ||
          storeCustomizationSetting?.slider?.both_slider) && {
          clickable: true,
        }
      }
      // navigation={
      //   (storeCustomizationSetting?.slider?.left_right_arrow ||
      //     storeCustomizationSetting?.slider?.both_slider) && {
      //     clickable: true,
      //   }
      // }
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {sliderDataUi}
    </Swiper>
  );
};

export default MainCarousel;
