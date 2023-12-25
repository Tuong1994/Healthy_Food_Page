import React from "react";
import { UI } from "@/components";
import { Lang } from "@/common/type";

const { Section, Button, Image, Space, UList, Grid, Typography } = UI;

const { Row, Col } = Grid;

const { Title, Paragraphy } = Typography;

const { List, ListItem } = UList;

interface AboutBannerProps {
  lang: Lang;
}

const AboutBanner: React.FC<AboutBannerProps> = ({ lang }) => {
  return (
    <Section rootClassName="about-banner">
      <Row justify="between">
        <Col xs={24} md={24} lg={13} span={12}>
          <Title weight={700} rootClassName="banner-title">
            {lang.about.banner.title}
          </Title>
          <Paragraphy size={17} weight={300} align="justify">
            {lang.about.banner.content}
          </Paragraphy>
          <Button color="green" sizes="lg" rootClassName="banner-btn">
            {lang.about.banner.action}
          </Button>
          <List>
            <ListItem>
              <Space>
                <Paragraphy strong size={18}>
                  {lang.about.banner.delivery}
                </Paragraphy>
                <Paragraphy italic>({lang.about.banner.term})</Paragraphy>
              </Space>
            </ListItem>
            <ListItem>
              <Paragraphy strong size={18}>
                {lang.about.banner.fresh}
              </Paragraphy>
            </ListItem>
            <ListItem>
              <Paragraphy strong size={18}>
                {lang.about.banner.deal}
              </Paragraphy>
            </ListItem>
          </List>
        </Col>
        <Col xs={0} md={0} lg={10} span={10}>
          <Image imgWidth="100%" src="/banner/about-banner.webp" />
        </Col>
      </Row>
    </Section>
  );
};

export default AboutBanner;
