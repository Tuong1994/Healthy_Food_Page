import React from "react";
import { Typography } from "..";
import Space, { type SpaceProps } from "@/components/UI/Space";
import type { ParagraphProps } from "@/components/UI/Typography/Paragraph";

const { Paragraph } = Typography;

interface InfoRowProps extends SpaceProps {
  label?: React.ReactNode;
  text?: React.ReactNode;
  labelProps?: ParagraphProps;
  textProps?: ParagraphProps;
}

const InfoRow: React.ForwardRefRenderFunction<HTMLDivElement, InfoRowProps> = (
  { label, text, size = "md", labelProps, textProps, ...restProps },
  ref
) => {
  const labelDefaultProps: ParagraphProps = { ...labelProps, rootClassName: "row-label" };

  const textDefaultProps: ParagraphProps = { ...textProps, strong: true };
  return (
    <Space ref={ref} {...restProps} size={size} rootClassName="info-row">
      <Paragraph {...labelDefaultProps}>{label} :</Paragraph>
      <Paragraph {...textDefaultProps}>{text}</Paragraph>
    </Space>
  );
};

export default React.forwardRef(InfoRow);
