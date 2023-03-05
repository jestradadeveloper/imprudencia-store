import { useEffect } from "react";
import { ItemListContainer } from "../../components/Item/ItemListContainer";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, getAllCategories } from "../../store/products";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);

  return <>{products && <ItemListContainer products={products} />}</>;
};

export { Home };
