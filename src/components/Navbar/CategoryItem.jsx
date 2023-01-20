
const CategoryItem = ({ index, title }) => {
  return (
    <>
      <li key={index} ><a href={`/${title.toLowerCase()}`} className="p-3 py-5 hover:text-pink-500 hover:border-b hover:border-pink-500">{title}</a></li>
    </>
  )
}

export default CategoryItem
