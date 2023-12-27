"use client";

import { NextPage } from "next";
import { UI } from "@/components";
import { BreadcrumbItems } from "@/components/UI/Breadcrumb/type";
import Link from "next/link";
import ProductInfo from "./ProductInfo";
import ProductSimilar from "./ProductSimilar";
import ProductTabs from "./ProductTabs";
import useLang from "@/hooks/useLang";

const { Breadcrumb } = UI;

const Product: NextPage = () => {
  const { lang } = useLang();

  const items: BreadcrumbItems = [
    { id: "1", label: <Link href="/">{lang.common.menu.home}</Link> },
    { id: "2", label: <Link href="/product/list">Category</Link> },
    { id: "3", label: "Product", actived: true },
  ];

  return (
    <div className="product-detail">
      <Breadcrumb items={items} />
      <ProductInfo lang={lang} />
      <ProductTabs lang={lang} />
      <ProductSimilar lang={lang} />
    </div>
  );
};

export default Product;
