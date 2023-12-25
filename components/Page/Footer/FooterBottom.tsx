import React from "react";
import { UI } from "@/components";
import useLangStore from "@/store/LangStore";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const { Grid, UList, Typography, Space, Image } = UI;

const { Row, Col } = Grid;

const { List, ListItem } = UList;

const { Paragraphy } = Typography;

interface FooterBottomProps {}

const ICON_SIZE = 20;

const FooterBottom: React.FC<FooterBottomProps> = () => {
  const lang = useLangStore((state) => state.lang);

  return (
    <div className="footer-bottom">
      <Row rootClassName="bottom-list" justify="between">
        <Col span={4}>
          <List head="HeaFood.vn" icon={""}>
            <ListItem rootClassName="list-link">
              <Link href="/">{lang.common.menu.home}</Link>
            </ListItem>
            <ListItem rootClassName="list-link">
              <Link href="/">{lang.common.menu.about}</Link>
            </ListItem>
          </List>
        </Col>
        <Col span={4}>
          <List head={lang.pageComponent.footer.support} icon={""}>
            <ListItem>
              <Space>
                <span>{lang.common.form.label.phone}:</span>
                <Paragraphy strong>028 3975 3186</Paragraphy>
              </Space>
            </ListItem>
            <ListItem>
              <Space>
                <span>{lang.common.form.label.email}:</span>
                <Paragraphy strong>info@heafood.vn</Paragraphy>
              </Space>
            </ListItem>
            <ListItem rootClassName="list-link">
              <Link href="/">{lang.common.menu.payment}</Link>
            </ListItem>
            <ListItem rootClassName="list-link">
              <Link href="/">{lang.common.menu.delivery}</Link>
            </ListItem>
            <ListItem rootClassName="list-link">
              <Link href="/">{lang.common.menu.exchange}</Link>
            </ListItem>
          </List>
        </Col>
        <Col lg={6} span={7}>
          <Image src="/store.svg" />
        </Col>
        <Col span={5}>
          <List head={lang.pageComponent.footer.connect}></List>
          <Space>
            <div className="list-icon">
              <FaFacebook size={ICON_SIZE} />
            </div>
            <div className="list-icon">
              <FaYoutube size={ICON_SIZE} />
            </div>
            <div className="list-icon">
              <FaInstagram size={ICON_SIZE} />
            </div>
            <div className="list-icon">
              <FaLinkedin size={ICON_SIZE} />
            </div>
          </Space>
        </Col>
      </Row>

      <Paragraphy align="center" variant="secondary">
        {lang.pageComponent.footer.content}
      </Paragraphy>
      <Paragraphy align="center" variant="secondary">
        {lang.common.form.label.address}: {lang.pageComponent.footer.address}
      </Paragraphy>
    </div>
  );
};

export default FooterBottom;
