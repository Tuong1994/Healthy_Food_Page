import React from "react";
import { UI } from "@/components";
import { Lang } from "@/common/type";
import Link from "next/link";
import url from "@/common/constant/url";

const { AUTH_SIGN_IN, AUTH_SIGN_UP } = url;

const { Grid, Button } = UI;

const { Row, Col } = Grid;

interface HeaderAuthProps {
  lang: Lang;
}

const HeaderAuth: React.FC<HeaderAuthProps> = ({ lang }) => {
  return (
    <Row align="middle" justify="between" rootClassName="bottom-auth">
      <Col span={12}>
        <Link href={AUTH_SIGN_IN}>
          <Button sizes="lg" ghost rootClassName="auth-btn">
            {lang.auth.signIn.title}
          </Button>
        </Link>
      </Col>
      <Col span={12}>
        <Link href={AUTH_SIGN_UP}>
          <Button sizes="lg" color="green" rootClassName="auth-btn">
            {lang.auth.signUp.title}
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default HeaderAuth;
