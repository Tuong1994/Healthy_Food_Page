import auth_vn from "./auth";
import common_vn from "./common";
import page_components_vn from "./page-components";
import home_vn from "./home";
import about_vn from "./about";

const vn = {
  common: common_vn,
  pageComponent: page_components_vn,
  auth: auth_vn,
  home: home_vn,
  about: about_vn,
};

export type VN = typeof vn;

export default vn;
