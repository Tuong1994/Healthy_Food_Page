import React from "react";
import { Control } from "@/components";
import { FaSearch } from "react-icons/fa";

const { Input } = Control;

interface HeaderSearchProps {}

const HeaderSearch: React.FC<HeaderSearchProps> = () => {
  return (
    <Input rootClassName="bottom-search" color="green" addonAfter={<FaSearch className="search-icon" />} />
  );
};

export default HeaderSearch;
