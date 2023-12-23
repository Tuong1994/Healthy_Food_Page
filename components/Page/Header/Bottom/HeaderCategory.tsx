import React from "react";
import { UI } from "@/components";
import { Lang } from "@/common/type";
import { FaListAlt } from "react-icons/fa";

const { Button, Space } = UI;

interface HeaderCategoryProps {
  lang: Lang;
}

const HeaderCategory: React.FC<HeaderCategoryProps> = ({ lang }) => {
  return (
    <div className="bottom-category">
      <Button sizes="lg" color="green" ghost rootClassName="category-btn">
        <Space align="middle">
          <FaListAlt />
          <span>{lang.pageComponent.header.category}</span>
        </Space>
      </Button>
    </div>
  );
};

export default HeaderCategory;
