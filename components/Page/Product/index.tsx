import React from "react";
import { UI } from "@/components";
import { HiMinus, HiPlus } from "react-icons/hi2";
import Link from "next/link";

const { Card, Image, Space, Typography } = UI;

const { Paragraphy } = Typography;

interface ProductProps {
  imgWidth?: number | string;
  imgHeight?: number | string;
  cardWidth?: number | string;
  responsive?: boolean;
}

const ICON_SIZE = 20;

const Product: React.FC<ProductProps> = ({
  imgWidth = "100%",
  imgHeight = "150px",
  cardWidth,
  responsive,
}) => {
  const responsiveClassName = responsive ? "product-responsive" : "";

  const imageResponsiveClassName = responsive ? "body-image" : "";

  const cardSize = () => {
    if (!cardWidth) return "unset";
    if (typeof cardWidth === "string") return cardWidth;
    return `${cardWidth}px`;
  };

  return (
    <Card
      style={{ minWidth: cardSize() }}
      rootClassName={`product ${responsiveClassName}`}
      bodyClassName="responsive-body"
    >
      <Link href="/">
        <Image
          rootClassName={`product-image ${imageResponsiveClassName}`}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
        />
      </Link>

      <div className="body-content">
        <Link href="/">Product name</Link>
        <Paragraphy rootClassName="product-price" strong size={16}>
          $100,000/kg
        </Paragraphy>
        <Space justify="end" rootClassName="product-action">
          <button className="action-btn action-btn-minus">
            <HiMinus size={ICON_SIZE} />
          </button>
          <input type="number" defaultValue="0" className="action-input" />
          <button className="action-btn">
            <HiPlus size={ICON_SIZE} />
          </button>
        </Space>
      </div>
    </Card>
  );
};

export default Product;
