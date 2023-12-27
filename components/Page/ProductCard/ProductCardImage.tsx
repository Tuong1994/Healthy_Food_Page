"use client";

import React from "react";
import { UI } from "@/components";
import Link from "next/link";
import ProductCardLike from "./ProductCardLike";
import { GridAppContext } from "@/components/UI/Grid/Context";

const { Image, Badge } = UI;

interface ProductCardImageProps {
  imgWidth: number | string;
  imgHeight: number | string;
  imageResponsiveClassName?: string;
}

const ProductCardImage: React.FC<ProductCardImageProps> = ({
  imgWidth,
  imgHeight,
  imageResponsiveClassName = "",
}) => {
  const { isPhone } = React.useContext(GridAppContext);

  return (
    <div className="product-card-image">
      <Link href="/product/detail">
        <Image imgWidth={imgWidth} imgHeight={imgHeight} rootClassName={imageResponsiveClassName} alt="product" />
      </Link>
      <Badge shape="square" color="blue" rootClassName="image-badge">
        New
      </Badge>
      {!isPhone && <ProductCardLike />}
    </div>
  );
};

export default ProductCardImage;
