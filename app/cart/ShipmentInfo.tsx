import React from "react";
import { UI } from "@/components";
import { Lang } from "@/common/type";

const { Divider, InfoRow } = UI;

interface ShipmentInfoProps {
  lang: Lang;
}

const ShipmentInfo: React.FC<ShipmentInfoProps> = ({ lang }) => {
  return (
    <div className="shipment-info">
      <Divider>{lang.cart.shipment.title}</Divider>
      <InfoRow size={5} label={lang.common.form.label.fullName} text="Jack Anderson" />
      <InfoRow size={5} label={lang.common.form.label.phone} text="079 322 9970" />
      <InfoRow size={5} label={lang.common.form.label.email} text="jack@example.com" />
      <InfoRow
        size={5}
        label={lang.common.form.label.address}
        text="79/24/13 Au Co Str, Ward 14, District 11, HCMC"
      />
      <InfoRow size={5} label={lang.common.form.label.note} text="Be careful" />
    </div>
  );
};

export default ShipmentInfo;
