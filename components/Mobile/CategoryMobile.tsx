import React from "react";
import useCategoryStore from "@/store/CategoryStore";

interface CategoryMobileProps {}

const CategoryMobile: React.FC<CategoryMobileProps> = () => {
  const categoriesWithSubs = useCategoryStore((state) => state.categoriesWithSub);

  const renderCategories = (start: number, end: number) => {
    return categoriesWithSubs.slice(start, end).map((category) => (
      <div key={category.id} className="inner-item">
        <span>{category.name}</span>
      </div>
    ));
  };

  return (
    <div className="category-mobile">
      <div className="mobile-wrap">
        <div className="wrap-inner">{renderCategories(0, 4)}</div>
        <div className="wrap-inner">{renderCategories(4, categoriesWithSubs.length)}</div>
      </div>
    </div>
  );
};

export default CategoryMobile;
