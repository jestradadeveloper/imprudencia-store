import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom";
export const ItemListContainer = () => {
  const { categoryId } = useParams();
  return(
    <div className="container mx-auto mt-5 flex flex-wrap w-10/12">
      <ItemList productsId={categoryId}/>
    </div>
  ) 
}
