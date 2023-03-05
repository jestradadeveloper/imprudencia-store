import React, { useEffect } from "react";
import { ItemListContainer } from "../../components/Item/ItemListContainer";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProducts,
  getAllCategories,
  cleanActiveProduct,
} from "../../store/products";
import { useParams } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, [dispatch]);

  return <>{products && <ItemListContainer products={products} />}</>;
};

export { Home };
