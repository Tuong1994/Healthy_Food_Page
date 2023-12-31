"use client";

import { NextPage } from "next";
import { UI } from "@/components";
import type { BreadcrumbItems } from "@/components/UI/Breadcrumb/type";
import type { TabsItems } from "@/components/UI/Tabs/type";
import { useLang } from "@/hooks";
import Link from "next/link";
import CustomerInfo from "./CustomerInfo";
import CustomerOrder from "./CustomerOrder";
import CustomerComment from "./CustomerComment";
import CustomerRate from "./CustomerRate";
import url from "@/common/constant/url";

const { HOME } = url;

const { Breadcrumb, Tabs, Grid } = UI;

const { Row, Col } = Grid;

const Customer: NextPage = () => {
  const { lang } = useLang();

  const items: BreadcrumbItems = [
    { id: "1", label: <Link href={HOME}>{lang.common.menu.home}</Link> },
    { id: "2", label: "User name", actived: true },
  ];

  const tabs: TabsItems = [
    { id: "1", title: lang.customer.order.title, content: <CustomerOrder /> },
    { id: "2", title: lang.customer.comment.title, content: <CustomerComment lang={lang} /> },
    { id: "3", title: lang.customer.rate.title, content: <CustomerRate lang={lang} /> },
  ];

  return (
    <div className="page customer">
      <Breadcrumb items={items} />
      <Row justify="between">
        <Col xs={24} md={24} lg={8} span={8}>
          <CustomerInfo lang={lang} />
        </Col>
        <Col xs={24} md={24} lg={16} span={16}>
          <Tabs color="green" items={tabs} />
        </Col>
      </Row>
    </div>
  );
};

export default Customer;
