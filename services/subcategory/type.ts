import { ELang } from "@/common/enum"

export type SubCategory = {
    id?: string
    name: string
    langCode: ELang
    path?: string;
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
}