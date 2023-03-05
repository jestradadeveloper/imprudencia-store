import { NavLink } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { slug, name } = category;
  return (
    <>
      <li key={slug}>
        <NavLink
          to={`/${slug}`}
          className={({ isActive }) =>
            isActive
              ? "p-3 py-5 hover:text-pink-500 hover:border-b hover:border-pink-500 border-b border-pink-500"
              : "p-3 py-5 hover:text-pink-500 hover:border-b hover:border-pink-500"
          }
        >
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default CategoryItem;
