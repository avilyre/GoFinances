import { Category } from "../../utils/categories/interface";

type CustomCategory = Pick<Category, "key" | "name">;

export interface CategorySelectProps {
  category: string;
  setCategory(category: CustomCategory): void
  closeSelectCategory(): void;
}