"use client";

import React from "react";
import { NextPage } from "next";
import AboutBanner from "./AboutBanner";
import AboutGuarantee from "./AboutGuarantee";
import AboutBlog from "./AboutBlog";
import AboutStory from "./AboutStory";
import AboutCategory from "./AboutCategory";
import useLang from "@/hooks/useLang";

const About: NextPage = () => {
  const { lang } = useLang();

  return (
    <div className="about">
      <AboutBanner lang={lang} />
      <AboutGuarantee lang={lang} />
      <AboutBlog lang={lang} />
      <AboutStory lang={lang} />
      <AboutCategory lang={lang} />
    </div>
  );
};

export default About;
