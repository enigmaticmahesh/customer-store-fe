import { ChevronRight } from "lucide-react";
import type { Category } from "./temp-data";
import { useNavigate } from "@tanstack/react-router";

const CategoryNavBtn = ({ category }: { category: Category }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (id: string, categoryName: string) => {
    const category_name = categoryName
      .toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");
    const url = `/search?category=${category_name}&_id=${id}`;
    navigate({
      to: url,
      viewTransition: true,
    });
  };

  return (
    <div className="pl-4">
      <h3
        onClick={() => handleCategoryClick(category._id, category?.name.en)}
        className="text-sm text-muted-foreground dark:text-muted-foreground hover:text-orange-400 font-medium leading-tight line-clamp-1  group-hover"
      >
        {category?.name.en}
      </h3>
      <ul className="pt-1 mt-1">
        {category?.children?.slice(0, 3).map((child) => (
          <li key={child._id} className="pt-1">
            <a
              onClick={() => handleCategoryClick(child._id, child?.name.en)}
              className="flex hover:translate-x-2 transition-transform duration-300 items-center  text-xs text-muted-foreground cursor-pointer"
            >
              <span className="text-xs text-muted-foreground ">
                {/*<IoChevronForwardSharp />*/}
                <ChevronRight className="size-3" />
              </span>
              {child?.name.en}
              {/* {console.log(
                "showingTranslateValue(child?.name)",
                showingTranslateValue(child?.name),
                child?.name
              )} */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryNavBtn;
