import auth_vn from "./auth";
import common_vn from "./common";
import page_components_vn from "./page-components";

const vn = {
  common: common_vn,
  pageComponent: page_components_vn,
  auth: auth_vn,
};

export type VN = typeof vn;

export default vn;
