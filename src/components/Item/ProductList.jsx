import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products";

export const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);
  //const [products, setProducts] = useState(null);

  // show a loading screen case the data hasn't arrived yet
  if (!products) {
    return "Loading...";
  }

  return (
    <>
      {products.map((item, index) => {
        return (
          <div className="" key={index}>
            <div className="">
              <h1 className="">{item.name}</h1>
              <h3 className="">{item.description}</h3>
              <p className="">{item.price}</p>
            </div>
            <div className="">
              <img className="" src="assets/about/experience.png" alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};
