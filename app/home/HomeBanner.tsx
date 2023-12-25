import React from "react";
import { UI } from "@/components";
import { HiChevronRight } from "react-icons/hi2";
import { CarouselItems } from "@/components/UI/Carousel/type";
import useCategoryStore from "@/store/CategoryStore";

const { Grid, Carousel } = UI;

const { Row, Col } = Grid;

const { Horizontal } = Carousel;

interface HomeBannerProps {}

const HomeBanner: React.FC<HomeBannerProps> = () => {
  const categoriesWithSub = useCategoryStore((state) => state.categoriesWithSub);

  const slides: CarouselItems = [
    { id: "1", content: <div style={{ width: "100%", height: "100%", background: "lightcoral" }}></div> },
    { id: "2", content: <div style={{ width: "100%", height: "100%", background: "lightblue" }}></div> },
    { id: "3", content: <div style={{ width: "100%", height: "100%", background: "lightgreen" }}></div> },
  ];

  const renderCategory = () => {
    return (
      <div className="banner-category">
        {categoriesWithSub.map((category) => (
          <div key={category.id} className="category-item">
            <div className="item-wrap">
              <span>{category.name}</span>
              <HiChevronRight size={16} />
            </div>

            <div className="item-child">
              {category.subCategories.map((subcategory) => (
                <div key={subcategory.id} className="child-inner">
                  {subcategory.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Row rootClassName="home-banner">
      <Col xs={0} md={0} lg={6} span={4}>
        {renderCategory()}
      </Col>
      <Col xs={24} md={24} lg={18} span={20}>
        <div className="banner-carousel">
          <Horizontal items={slides} autoPlay infinite rootClassName="carousel-slide" />
        </div>
      </Col>
    </Row>
  );
};

export default HomeBanner;
