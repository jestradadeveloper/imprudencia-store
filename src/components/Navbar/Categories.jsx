
import CategoryItem from "./CategoryItem"

export const Categories = ({categoriesList}) => {
  return (
    <ul className="flex">{categoriesList.map((item,index) => <CategoryItem key={index} index={index} title={item}/>)}</ul>
  )
}
