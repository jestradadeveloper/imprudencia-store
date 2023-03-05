import { NavLink } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { slug, name } = category;
  const style =
    "flex justify-center items-center h-10 px-3 hover:text-pink-500 hover:border-b hover:border-pink-500 border-b";
  return (
    <>
      <li key={slug}>
        <NavLink
          to={`/${slug}`}
          className={({ isActive }) =>
            isActive
              ? `${style} border-pink-500`
              : `${style} border-transparent`
          }
        >
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default CategoryItem;
