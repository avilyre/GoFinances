import { Category } from "../../utils/categories/interface";

export type CustomCategory = Pick<Category, "key" | "title">;

export interface CategorySelectProps {
  category: CustomCategory;
  setCategory(category: Category): void
  closeSelectCategory(): void;
}

export interface CategoryItemProps {
  isActive: boolean;
}
