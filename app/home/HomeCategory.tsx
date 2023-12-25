import React from "react";
import { UI } from "@/components";
import Link from "next/link";
import Product from "@/components/Page/Product";
import useLangStore from "@/store/LangStore";

const { Typography, Grid } = UI;

const { Title } = Typography;

const { Row, Col } = Grid;

interface HomeCategoryProps {}

const HomeCategory: React.FC<HomeCategoryProps> = () => {
  const lang = useLangStore((state) => state.lang);

  return (
    <div className="home-category">
      <Row justify="between" align="middle">
        <Col>
          <Title level={5} weight={600} rootClassName="category-name">
            Category Name
          </Title>
        </Col>
        <Col>
          <Link href="/product/list" className="category-link">
            {lang.home.link}
          </Link>
        </Col>
      </Row>

      <div className="category-products">
        {[...Array(10)].map((_, idx) => (
          <Product key={idx} cardWidth={200} />
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
