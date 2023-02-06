import { NavLink } from "react-router-dom"

const CategoryItem = ({ index, title }) => {
  return (
    <>
      <li key={index} ><NavLink to={`/category/${title.toLowerCase()}`}  className={({isActive}) => (isActive ? "p-3 py-5 hover:text-pink-500 hover:border-b hover:border-pink-500 border-b border-pink-500" : 'p-3 py-5 hover:text-pink-500 hover:border-b hover:border-pink-500')}>{title}</NavLink></li>
    </>
  )
}

export default CategoryItem
