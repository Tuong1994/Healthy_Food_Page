import { create, StateCreator } from "zustand";
import { Category } from "@/services/category/type";
import { ELang } from "@/common/enum";

interface CategoryState {
  categoriesWithSub: Category[];
}

const store: StateCreator<CategoryState> = () => ({
  categoriesWithSub: [
    {
      id: "1",
      name: "Category 1",
      langCode: ELang.EN,
      subCategories: [
        { id: "1", name: "subcategory 1", langCode: ELang.EN, categoryId: "" },
        { id: "2", name: "subcategory 2", langCode: ELang.EN, categoryId: "" },
        { id: "3", name: "subcategory 3", langCode: ELang.EN, categoryId: "" },
        { id: "4", name: "subcategory 4", langCode: ELang.EN, categoryId: "" },
      ],
    },
    {
      id: "2",
      name: "Category 2",
      langCode: ELang.EN,
      subCategories: [
        { id: "1", name: "subcategory 1", langCode: ELang.EN, categoryId: "" },
        { id: "2", name: "subcategory 2", langCode: ELang.EN, categoryId: "" },
        { id: "3", name: "subcategory 3", langCode: ELang.EN, categoryId: "" },
        { id: "4", name: "subcategory 4", langCode: ELang.EN, categoryId: "" },
        { id: "5", name: "subcategory 5", langCode: ELang.EN, categoryId: "" },
      ],
    },
    {
      id: "3",
      name: "Category 3",
      langCode: ELang.EN,
      subCategories: [
        { id: "1", name: "subcategory 1", langCode: ELang.EN, categoryId: "" },
        { id: "2", name: "subcategory 2", langCode: ELang.EN, categoryId: "" },
        { id: "3", name: "subcategory 3", langCode: ELang.EN, categoryId: "" },
        { id: "4", name: "subcategory 4", langCode: ELang.EN, categoryId: "" },
        { id: "5", name: "subcategory 5", langCode: ELang.EN, categoryId: "" },
        { id: "6", name: "subcategory 6", langCode: ELang.EN, categoryId: "" },
      ],
    },
    {
      id: "4",
      name: "Category 4",
      langCode: ELang.EN,
      subCategories: [
        { id: "1", name: "subcategory 1", langCode: ELang.EN, categoryId: "" },
        { id: "2", name: "subcategory 2", langCode: ELang.EN, categoryId: "" },
        { id: "3", name: "subcategory 3", langCode: ELang.EN, categoryId: "" },
      ],
    },
    {
      id: "5",
      name: "Category 5",
      langCode: ELang.EN,
      subCategories: [
        { id: "1", name: "subcategory 1", langCode: ELang.EN, categoryId: "" },
        { id: "2", name: "subcategory 2", langCode: ELang.EN, categoryId: "" },
        { id: "3", name: "subcategory 3", langCode: ELang.EN, categoryId: "" },
        { id: "4", name: "subcategory 4", langCode: ELang.EN, categoryId: "" },
        { id: "5", name: "subcategory 5", langCode: ELang.EN, categoryId: "" },
        { id: "6", name: "subcategory 6", langCode: ELang.EN, categoryId: "" },
        { id: "7", name: "subcategory 7", langCode: ELang.EN, categoryId: "" },
      ],
    },
    {
      id: "6",
      name: "Category 6",
      langCode: ELang.EN,
      subCategories: [
        { id: "1", name: "subcategory 1", langCode: ELang.EN, categoryId: "" },
        { id: "2", name: "subcategory 2", langCode: ELang.EN, categoryId: "" },
      ],
    },
    {
      id: "7",
      name: "Category 7",
      langCode: ELang.EN,
      subCategories: [
        { id: "1", name: "subcategory 1", langCode: ELang.EN, categoryId: "" },
        { id: "2", name: "subcategory 2", langCode: ELang.EN, categoryId: "" },
        { id: "3", name: "subcategory 3", langCode: ELang.EN, categoryId: "" },
      ],
    },
    {
      id: "8",
      name: "Category 8",
      langCode: ELang.EN,
      subCategories: [
        { id: "1", name: "subcategory 1", langCode: ELang.EN, categoryId: "" },
        { id: "2", name: "subcategory 2", langCode: ELang.EN, categoryId: "" },
        { id: "3", name: "subcategory 3", langCode: ELang.EN, categoryId: "" },
        { id: "4", name: "subcategory 4", langCode: ELang.EN, categoryId: "" },
        { id: "5", name: "subcategory 5", langCode: ELang.EN, categoryId: "" },
      ],
    },
  ],
});

const useCategoryStore = create(store);

export default useCategoryStore;
