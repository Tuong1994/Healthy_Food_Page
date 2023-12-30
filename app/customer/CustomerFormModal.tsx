import React from "react";
import { UI, Control } from "@/components";
import type { Lang } from "@/common/type";
import type { ModalProps } from "@/components/UI/Modal";
import type { GridRowProps } from "@/components/UI/Grid/Row";
import { EGender, ERole } from "@/services/customer/enum";
import { useSelectOption } from "@/hooks";
import { GridColProps } from "@/components/UI/Grid/Col";
import { Customer } from "@/services/customer/type";

const { Space, Modal, Button, Divider, Grid } = UI;

const { Row, Col } = Grid;

const { Form, FormItem, Upload, Input, Select, DatePicker } = Control;

const { Image } = Upload;

const { SingleImageUpload } = Image;

interface CustomerFormModalProps extends ModalProps {
  lang: Lang;
  handleOpenPassword: () => void;
}

const CustomerFormModal: React.FC<CustomerFormModalProps> = ({ lang, handleOpenPassword, ...restProps }) => {
  const { gender } = useSelectOption();

  const rowProps: GridRowProps = {
    gutters: [5, 5],
    justify: "between",
  };

  const colProps: GridColProps = {
    xs: 24,
    md: 12,
    lg: 12,
    span: 12,
  };

  const initialData: Customer = {
    account: "account",
    firstName: "Jack",
    lastName: "Williams",
    phone: "0793229970",
    email: "jack@example.com",
    gender: EGender.MALE,
    birthday: new Date("1994-11-28"),
    address_en: "79/24/13 Au Co str",
    address_vn: "79/24/13 Au Co",
    cityCode: 0,
    districtCode: 0,
    wardCode: 0,
    role: ERole.CUSTOMER,
  };

  return (
    <Modal
      color="green"
      head={lang.customer.modal.title}
      okButtonTitle={lang.common.actions.save}
      {...restProps}
    >
      <Form<Customer> color="green" initialData={initialData}>
        <Row {...rowProps}>
          <Col xs={24} md={6} lg={6} span={6}>
            <Space justify="center">
              <SingleImageUpload />
            </Space>
          </Col>
          <Col xs={24} md={18} lg={18} span={18}>
            <FormItem name="account" disabled>
              <Input label={lang.common.form.label.account} />
            </FormItem>
            <Button ghost color="red" onClick={handleOpenPassword}>
              {lang.customer.modal.action}
            </Button>
          </Col>
        </Row>

        <Divider>{lang.customer.modal.personal}</Divider>

        <Row {...rowProps}>
          <Col {...colProps}>
            <FormItem name="firstName">
              <Input required label={lang.common.form.label.firstName} />
            </FormItem>
          </Col>
          <Col {...colProps}>
            <FormItem name="lastName">
              <Input required label={lang.common.form.label.lastName} />
            </FormItem>
          </Col>
        </Row>

        <Row {...rowProps}>
          <Col {...colProps}>
            <FormItem name="phone">
              <Input required label={lang.common.form.label.phone} />
            </FormItem>
          </Col>
          <Col {...colProps}>
            <FormItem name="email">
              <Input required label={lang.common.form.label.email} />
            </FormItem>
          </Col>
        </Row>

        <Row {...rowProps}>
          <Col {...colProps}>
            <FormItem name="birthday">
              <DatePicker optional label={lang.common.form.label.birthday} />
            </FormItem>
          </Col>
          <Col {...colProps}>
            <FormItem name="gender">
              <Select optional options={gender} label={lang.common.form.label.gender} />
            </FormItem>
          </Col>
        </Row>

        <Divider>
          <Space>
            <span>{lang.customer.modal.location}</span>
            <span>({lang.common.form.label.optional})</span>
          </Space>
        </Divider>

        <Row {...rowProps}>
          <Col {...colProps}>
            <FormItem name="address_en">
              <Input label={lang.common.form.label.address_en} />
            </FormItem>
          </Col>
          <Col {...colProps}>
            <FormItem name="address_vn">
              <Input label={lang.common.form.label.address_vn} />
            </FormItem>
          </Col>
        </Row>

        <Row {...rowProps}>
          <Col xs={24} md={8} lg={8} span={8}>
            <FormItem name="cityCode">
              <Select label={lang.common.form.label.city} />
            </FormItem>
          </Col>
          <Col xs={24} md={8} lg={8} span={8}>
            <FormItem name="districtCode">
              <Select label={lang.common.form.label.district} />
            </FormItem>
          </Col>
          <Col xs={24} md={8} lg={8} span={8}>
            <FormItem name="wardCode">
              <Select label={lang.common.form.label.ward} />
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default CustomerFormModal;
