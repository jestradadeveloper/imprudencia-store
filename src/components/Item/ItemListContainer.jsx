import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
export const ItemListContainer = ({ products }) => {
  const { categorySlug } = useParams();
  return (
    <div className="container mx-auto mt-5 flex flex-wrap w-10/12">
      <ItemList productsId={categorySlug} products={products} />
    </div>
  );
};
