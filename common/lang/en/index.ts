import about_en from "./about";
import auth_en from "./auth";
import common_en from "./common";
import home_en from "./home";
import page_components_en from "./page-components";

const en = {
  common: common_en,
  pageComponent: page_components_en,
  auth: auth_en,
  home: home_en,
  about: about_en,
};

export type EN = typeof en;

export default en;
