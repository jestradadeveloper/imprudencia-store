import { Categories } from "./Categories"

export const Menu = () => {
  const CATEGORIES_LIST = [ 'Men', 'Women', 'Kid']
  return <Categories categoriesList={CATEGORIES_LIST} />
}
