import React from "react";
import { UI } from "@/components";
import { Lang } from "@/common/type";
import Logo from "@/components/Page/Logo";
import Link from "next/link";
import HeaderSearch from "./HeaderSearch";
import HeaderCart from "./HeaderCart";
import HeaderAuth from "./HeaderAuth";
import HeaderMobile from "./HeaderMobile";
import HeaderLikes from "./HeaderLikes";
import HeaderCategory from "./HeaderCategory";

const { Grid, Layout } = UI;

const { Row, Col } = Grid;

const { Head } = Layout;

interface HeaderBottomProps {
  lang: Lang;
}

const HeaderBottom: React.FC<HeaderBottomProps> = ({ lang }) => {
  return (
    <Head rootClassName="header-bottom">
      <Row align="middle" justify="between">
        <Col>
          <Link href="/">
            <Logo />
          </Link>
        </Col>

        <Col lg={0} span={0}>
          <HeaderMobile />
        </Col>

        <Col xs={0} md={0} span={4}>
          <HeaderCategory lang={lang} />
        </Col>

        <Col xs={24} md={24} span={10}>
          <HeaderSearch />
        </Col>

        <Col xs={0} md={0}>
          <HeaderLikes />
        </Col>

        <Col xs={0} md={0}>
          <HeaderCart lang={lang} />
        </Col>

        <Col xs={0} md={0} span={5}>
          <HeaderAuth lang={lang} />
        </Col>
      </Row>
    </Head>
  );
};

export default HeaderBottom;
