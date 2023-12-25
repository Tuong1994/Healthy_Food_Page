import { ELang } from "@/common/enum";
import { SubCategory } from "@/services/subcategory/type";
import { create, StateCreator } from "zustand";

interface SubCategoryState {
  subcategories: SubCategory[];
}

const store: StateCreator<SubCategoryState> = () => ({
  subcategories: [
    { id: "1", name: "Subcategory 1", langCode: ELang.EN, path: "/category/egg.png", categoryId: "" },
    { id: "2", name: "Subcategory 2", langCode: ELang.EN, path: "/category/alcohol.png", categoryId: "" },
    { id: "3", name: "Subcategory 3", langCode: ELang.EN, path: "/category/canned.png", categoryId: "" },
    { id: "4", name: "Subcategory 4", langCode: ELang.EN, path: "/category/cheese.png", categoryId: "" },
    { id: "5", name: "Subcategory 5", langCode: ELang.EN, path: "/category/coffee.png", categoryId: "" },
    { id: "6", name: "Subcategory 6", langCode: ELang.EN, path: "/category/cream.png", categoryId: "" },
    { id: "7", name: "Subcategory 7", langCode: ELang.EN, path: "/category/flour.png", categoryId: "" },
    { id: "8", name: "Subcategory 8", langCode: ELang.EN, path: "/category/vegetable.png", categoryId: "" },
    { id: "9", name: "Subcategory 9", langCode: ELang.EN, path: "/category/fruit.png", categoryId: "" },
    { id: "10", name: "Subcategory 10", langCode: ELang.EN, path: "/category/honey.png", categoryId: "" },
    { id: "12", name: "Subcategory 12", langCode: ELang.EN, path: "/category/juice.png", categoryId: "" },
    { id: "13", name: "Subcategory 13", langCode: ELang.EN, path: "/category/meat.png", categoryId: "" },
    { id: "14", name: "Subcategory 14", langCode: ELang.EN, path: "/category/mushroom.png", categoryId: "" },
    { id: "15", name: "Subcategory 15", langCode: ELang.EN, path: "/category/noodles.png", categoryId: "" },
    { id: "16", name: "Subcategory 16", langCode: ELang.EN, path: "/category/oil.png", categoryId: "" },
    { id: "17", name: "Subcategory 17", langCode: ELang.EN, path: "/category/rice.png", categoryId: "" },
    { id: "18", name: "Subcategory 18", langCode: ELang.EN, path: "/category/sauce.png", categoryId: "" },
    { id: "19", name: "Subcategory 19", langCode: ELang.EN, path: "/category/sausage.png", categoryId: "" },
    { id: "20", name: "Subcategory 20", langCode: ELang.EN, path: "/category/seafood.png", categoryId: "" },
    { id: "21", name: "Subcategory 21", langCode: ELang.EN, path: "/category/seasoning.png", categoryId: "" },
    { id: "22", name: "Subcategory 22", langCode: ELang.EN, path: "/category/syrup.png", categoryId: "" },
  ],
});

const useSubCategoryStore = create(store);

export default useSubCategoryStore;
