import React from "react";
import { HiChevronRight } from "react-icons/hi2";
import useCategoryStore from "@/store/CategoryStore";
import utils from "@/utils";

interface CategoriesProps {
  highlight?: boolean;
}

const Categories: React.FC<CategoriesProps> = ({ highlight = false }) => {
  const [categoriesWithSub, show] = useCategoryStore((state) => [state.categoriesWithSub, state.show]);

  const isHighLight = show && highlight;

  const highLightClassName = isHighLight ? "categories-highlight" : "";

  const backdropActiveClassName = isHighLight ? "categories-backdrop-active" : "";

  const mainClassName = utils.formatClassName("categories", highLightClassName);

  const backdropClassName = utils.formatClassName("categories-backdrop", backdropActiveClassName);

  return (
    <React.Fragment>
      {isHighLight && <div className={backdropClassName} />}

      <div className={mainClassName}>
        {categoriesWithSub.map((category) => (
          <div key={category.id} className="categories-item">
            <div className="item-wrap">
              <span>{category.name}</span>
              <HiChevronRight size={16} />
            </div>

            <div className="item-child">
              {category.subCategories.map((subcategory) => (
                <div key={subcategory.id} className="child-inner">
                  {subcategory.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Categories;
