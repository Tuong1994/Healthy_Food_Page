import auth_vn from "./auth";
import common_vn from "./common";
import page_components_vn from "./page-components";
import home_vn from "./home";
import about_vn from "./about";
import product_vn from "./product";
import cart_vn from "./cart";

const vn = {
  common: common_vn,
  pageComponent: page_components_vn,
  auth: auth_vn,
  home: home_vn,
  about: about_vn,
  product: product_vn,
  cart: cart_vn,
};

export type VN = typeof vn;

export default vn;
