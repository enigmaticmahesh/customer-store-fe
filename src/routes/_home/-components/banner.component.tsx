import { Link } from "@tanstack/react-router";
import { storeCustomizationSetting } from "./temp-data";

const Banner = () => {
  const home = storeCustomizationSetting?.home;
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className=" text-xl">
          <span className="text-primary dark:text-muted-foreground font-bold">
            {home?.promotion_title.en}
          </span>{" "}
        </h1>

        <p className="text-muted-foreground dark:text-muted-foreground">
          {home?.promotion_description.en}
        </p>
      </div>
      <Link
        to={home?.promotion_button_link}
        className="text-sm font-medium px-6 py-2 bg-primary text-center rounded-full text-primary-foreground hover:bg-primary/90"
        viewTransition
      >
        {home?.promotion_button_name.en}
      </Link>
    </div>
  );
};

export default Banner;
