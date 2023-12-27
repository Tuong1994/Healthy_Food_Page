"use client";

import React from "react";
import HeaderBottom from "./Bottom";
import HeaderTop from "./Top";
import useLang from "@/hooks/useLang";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { lang } = useLang();

  return (
    <div className="header">
      <HeaderTop lang={lang} />
      <HeaderBottom lang={lang} />
    </div>
  );
};

export default Header;
