export type Comment = {
  id?: string;
  parentId: string;
  content: string;
  customerId: string;
  productId: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
