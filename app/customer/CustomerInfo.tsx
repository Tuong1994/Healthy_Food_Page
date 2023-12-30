import React from "react";
import { UI } from "@/components";
import type { Lang } from "@/common/type";
import type { InfoRowProps } from "@/components/UI/InfoRow";
import { HiCalendar, HiPhone, HiUser } from "react-icons/hi2";
import { HiLocationMarker, HiMail, HiPencilAlt } from "react-icons/hi";
import CustomerFormModal from "./CustomerFormModal";
import CustomerPasswordModal from "./CustomerPasswordModal";

const { Card, Avatar, Space, Divider, InfoRow, Tooltip, Button, Typography } = UI;

const { Paragraph } = Typography;

interface CustomerInfoProps {
  lang: Lang;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ lang }) => {
  const [openForm, setOpenForm] = React.useState<boolean>(false);

  const [openPassword, setOpenPassword] = React.useState<boolean>(false);

  const commonProps: InfoRowProps = {
    hasColon: false,
    labelProps: { style: { width: "auto" } },
    textProps: { weight: 400, strong: false },
    labelSpanProps: { xs: 2, md: 2, lg: 2, span: 2 },
    textSpanProps: { xs: 20, md: 20, lg: 20, span: 20 },
  };

  const handleOpenForm = () => setOpenForm(true);

  const handleOpenPassword = () => setOpenPassword(true);

  const handleCloseForm = () => setOpenForm(false);

  const handleClosePassword = () => setOpenPassword(false);

  return (
    <React.Fragment>
      <Card bodyClassName="customer-info">
        <Space align="middle">
          <Avatar color="black" size={50} />
          <div className="info-group">
            <Paragraph strong size={16}>{lang.customer.greeting}, User name</Paragraph>
            <a href="#">
              <Button sizes="sm" color="black">
                {lang.customer.admin}
              </Button>
            </a>
          </div>
        </Space>

        <Divider />

        <Space justify="end">
          <Tooltip label={lang.common.actions.edit} placement="left" onClick={handleOpenForm}>
            <HiPencilAlt className="info-edit-icon" size={18} />
          </Tooltip>
        </Space>

        <InfoRow {...commonProps} label={<HiUser />} text="Jack Williams" />
        <InfoRow {...commonProps} label={<HiPhone />} text="079 322 9970" />
        <InfoRow {...commonProps} label={<HiMail />} text="jack@example.com" />
        <InfoRow {...commonProps} label={<HiUser />} text="Male" />
        <InfoRow {...commonProps} label={<HiCalendar />} text="28/11/1994" />
        <InfoRow
          {...commonProps}
          label={<HiLocationMarker />}
          text="79/24/13 Au Co Str, Ward 14, District 11, HCMC"
        />
      </Card>

      <CustomerFormModal
        lang={lang}
        open={openForm}
        onCancel={handleCloseForm}
        handleOpenPassword={handleOpenPassword}
      />

      <CustomerPasswordModal lang={lang} open={openPassword} onCancel={handleClosePassword} />
    </React.Fragment>
  );
};

export default CustomerInfo;
