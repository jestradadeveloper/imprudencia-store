import React, { useEffect } from "react";
import { ItemListContainer } from "../../components/Item/ItemListContainer";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProductsByCategorySlug,
  getAllCategories,
  cleanActiveProduct,
} from "../../store/products";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProductsByCategorySlug(categorySlug));
    dispatch(getAllCategories());
  }, [categorySlug]);

  return (
    <>
      <div className="h-96 bg-pink-200 text-white font-bold text-4xl justify-center items-center flex">
        <h1>{categorySlug}</h1>
      </div>
      {products && <ItemListContainer products={products} />}
    </>
  );
};

export default CategoryPage;