import React from "react";
import { UI } from "@/components";
import { Lang } from "@/common/type";

const { Space, Grid, Button } = UI;

const { Row, Col } = Grid;

interface HeaderAuthProps {
  lang: Lang;
}

const HeaderAuth: React.FC<HeaderAuthProps> = ({ lang }) => {
  return (
    <Row align="middle" justify="between" rootClassName="bottom-auth">
      <Col span={12}>
        <Button sizes="lg" ghost rootClassName="auth-btn">
          {lang.auth.signIn.title}
        </Button>
      </Col>
      <Col span={12}>
        <Button sizes="lg" color="green" rootClassName="auth-btn">
          {lang.auth.signUp.title}
        </Button>
      </Col>
    </Row>
  );
};

export default HeaderAuth;
