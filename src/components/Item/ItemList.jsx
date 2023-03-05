import { Item } from "./Item";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories, getAllProducts } from "../../store/products/thunks";
export const ItemList = ({ productsId, products }) => {
  return (
    products &&
    products.map((product, index) => <Item key={index} product={product} />)
  );
};
