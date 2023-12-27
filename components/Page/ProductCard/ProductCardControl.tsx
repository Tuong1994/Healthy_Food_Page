import React from "react";
import { UI } from "@/components";
import { HiMinus, HiPlus } from "react-icons/hi2";

const { Space } = UI;

const ICON_SIZE = 20;

interface ProductCardControlProps {}

const ProductCardControl: React.FC<ProductCardControlProps> = () => {
  return (
    <Space justify="end" rootClassName="product-card-action">
      <button className="action-btn action-btn-minus">
        <HiMinus size={ICON_SIZE} />
      </button>
      <input type="number" defaultValue="0" className="action-input" />
      <button className="action-btn">
        <HiPlus size={ICON_SIZE} />
      </button>
    </Space>
  );
};

export default ProductCardControl;
