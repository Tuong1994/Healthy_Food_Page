import React from "react";
import { UI } from "@/components";
import { HiMinus, HiPlus } from "react-icons/hi2";
import Link from "next/link";

const { Card, Image, Space, Button, Typography } = UI;

const { Paragraphy } = Typography;

interface ProductProps {
  width?: number | string;
}

const ICON_SIZE = 20;

const Product: React.FC<ProductProps> = ({ width }) => {
  const cardSize = () => {
    if (!width) return "unset";
    if (typeof width === "string") return width;
    return `${width}px`;
  };

  return (
    <Link href="/" className="product">
      <Card style={{ minWidth: cardSize() }}>
        <Image rootClassName="product-image" imgWidth="100%" />
        <Paragraphy>Product name</Paragraphy>
        <Paragraphy rootClassName="product-price" strong size={16}>
          $100,000/kg
        </Paragraphy>
        <Space justify="end">
          <button className="product-btn product-btn-minus">
            <HiMinus size={ICON_SIZE} />
          </button>
          <input type="number" defaultValue="0" className="product-input" />
          <button className="product-btn">
            <HiPlus size={ICON_SIZE} />
          </button>
        </Space>
      </Card>
    </Link>
  );
};

export default Product;
