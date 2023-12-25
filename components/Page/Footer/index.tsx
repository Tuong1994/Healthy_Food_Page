"use client";

import React from "react";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer">
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
