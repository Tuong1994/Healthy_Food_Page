import React from "react";
import { UI } from "@/components";
import Link from "next/link";

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
  return (
    <div className="product-card-image">
      <Link href="/product/detail">
        <Image
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          rootClassName={imageResponsiveClassName}
          alt="product"
        />
      </Link>
      <Badge shape="square" color="blue" rootClassName="image-badge">
        New
      </Badge>
    </div>
  );
};

export default ProductCardImage;
