"use client";

import { NextPage } from "next";
import { UI } from "@/components";
import PaymentMethods from "./PaymentMethods";
import PaymentTransfer from "./PaymentTransfer";
import PaymentCash from "./PaymentCash";
import PaymentCod from "./PaymentCod";
import useLang from "@/hooks/useLang";

const { Typography } = UI;

const { Title } = Typography;

const Payment: NextPage = () => {
  const { lang } = useLang();

  return (
    <div className="page payment">
      <Title weight={600}>{lang.payment.title}</Title>
      <PaymentMethods lang={lang} />
      <PaymentTransfer lang={lang} />
      <PaymentCash lang={lang} />
      <PaymentCod lang={lang} />
    </div>
  );
};

export default Payment;
