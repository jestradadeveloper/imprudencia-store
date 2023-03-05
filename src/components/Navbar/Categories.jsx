import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
export const Categories = ({ categoriesList }) => {
  const { categories, isLoading } = useSelector((state) => state.products);

  return (
    <ul className="md:flex hidden">
      {categories &&
        categories.map((category) => (
          <CategoryItem key={category.slug} category={category} />
        ))}
    </ul>
  );
};
