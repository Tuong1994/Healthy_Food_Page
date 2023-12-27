"use client";

import React from "react";
import { UI } from "@/components";
import { HiStar } from "react-icons/hi2";
import RateModal from "./RateModal";
import useLang from "@/hooks/useLang";

const { Space, Button, Typography } = UI;

const { Paragraph } = Typography;

interface RateProps {}

const Rate: React.FC<RateProps> = () => {
  const { lang } = useLang();

  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <div className="rate">
      <Space align="middle">
        <Space size={5}>
          {[...Array(5)].map((_, idx) => (
            <HiStar key={idx} size={25} className="rate-star" />
          ))}
        </Space>
        <Paragraph>1 / 5 ({lang.pageComponent.rate.voted})</Paragraph>
        <Button color="green" ghost onClick={handleOpen}>
          {lang.pageComponent.rate.action}
        </Button>
      </Space>

      <RateModal lang={lang} open={open} onCancel={handleClose} />
    </div>
  );
};

export default Rate;
