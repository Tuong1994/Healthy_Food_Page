"use client";

import { NextPage } from "next";
import { UI, Control } from "@/components";
import { HiUser, HiLockClosed } from "react-icons/hi2";
import AuthHeader from "@/components/Page/Auth/AuthHeader";
import useLang from "@/hooks/useLang";
import AuthBack from "@/components/Page/Auth/AuthBack";
import AuthNote from "@/components/Page/Auth/AuthNote";
import Link from "next/link";
import url from "@/common/constant/url";

const { AUTH_SIGN_UP } = url;

const { Card, Button, Typography } = UI;

const { Title } = Typography;

const { Form, FormItem, Input, InputPassword } = Control;

interface FormData {
  account: string;
  password: string;
}

const SignIn: NextPage = () => {
  const { lang } = useLang();

  const initialData: FormData = {
    account: "",
    password: "",
  };

  return (
    <div className="sign-in">
      <AuthHeader />
      <div className="sign-in-wrap">
        <AuthBack lang={lang} />

        <Card
          head={
            <Title level={2} rootClassName="wrap-title">
              {lang.auth.signIn.title}
            </Title>
          }
          bodyClassName="wrap-form"
        >
          <Form<FormData> color="green" sizes="lg" initialData={initialData}>
            <FormItem name="account">
              <Input label={lang.common.form.label.account} addonBefore={<HiUser />} />
            </FormItem>
            <FormItem name="password">
              <InputPassword label={lang.common.form.label.password} addonBefore={<HiLockClosed />} />
            </FormItem>

            <div className="form-actions">
              <Button rootClassName="actions-btn">{lang.auth.signIn.title}</Button>
              <Link href={AUTH_SIGN_UP}>
                <Button rootClassName="actions-btn" ghost>
                  {lang.auth.signUp.title}
                </Button>
              </Link>
            </div>
          </Form>
        </Card>

        <AuthNote lang={lang} />
      </div>
    </div>
  );
};

export default SignIn;
