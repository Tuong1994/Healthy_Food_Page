"use client";

import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";
import useNotDisplay from "@/hooks/useNotDisplay";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const notDisplay = useNotDisplay();

  if (notDisplay) return <React.Fragment></React.Fragment>;

  return (
    <div className="footer">
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
