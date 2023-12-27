"use client";

import React from "react";
import HeaderBottom from "./Bottom";
import HeaderTop from "./Top";
import useLang from "@/hooks/useLang";
import useNotDisplay from "@/hooks/useNotDisplay";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { lang } = useLang();

  const notDisplay = useNotDisplay();

  if (notDisplay) return <React.Fragment></React.Fragment>;

  return (
    <div className="header">
      <HeaderTop lang={lang} />
      <HeaderBottom lang={lang} />
    </div>
  );
};

export default Header;
