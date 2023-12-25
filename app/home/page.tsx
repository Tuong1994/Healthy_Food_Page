"use client";

import React from "react";
import { NextPage } from "next";
import HomeBanner from "./HomeBanner";
import HomeCategory from "./HomeCategory";
import CategoryMobile from "@/components/Mobile/CategoryMobile";

const Home: NextPage = () => {
  return (
    <div className="home">
      <HomeBanner />
      <CategoryMobile />
      <HomeCategory />
      <HomeCategory />
      <HomeCategory />
      <HomeCategory />
      <HomeCategory />
      <HomeCategory />
      <HomeCategory />
      <HomeCategory />
    </div>
  );
};

export default Home;
