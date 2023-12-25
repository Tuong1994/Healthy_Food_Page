import { ELang } from "@/common/enum";
import { SubCategory } from "../subcategory/type";

export type Category = {
  id?: string;
  name: string;
  langCode: ELang;
  subCategories: SubCategory[]
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
