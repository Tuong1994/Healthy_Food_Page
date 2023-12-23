"use client";

import React from "react";
import HeaderBottom from "./Bottom";
import HeaderTop from "./Top";
import useLangStore from "@/store/LangStore";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const lang = useLangStore((state) => state.lang);

  return (
    <div className="header">
      <HeaderTop lang={lang} />
      <HeaderBottom lang={lang} />
    </div>
  );
};

export default Header;
