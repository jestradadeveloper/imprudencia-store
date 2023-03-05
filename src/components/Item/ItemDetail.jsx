import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsService } from "../../services/products";
import { useSelector, useDispatch } from "react-redux";
import { getProductBySlug, cleanActiveProduct } from "../../store/products";
import { ItemCounter } from "../ui/ItemCounter";
import { CartContext } from "../../context/cart/CartContex";

export const ItemDatail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addProductToCart } = useContext(CartContext);
  const { activeProduct, isLoading } = useSelector((state) => state.products);
  const { productSlug } = useParams();
  const [tempCartProduct, setTempCartProduct] = useState({
    slug: "",
    image: "",
    price: 0,
    name: "",
    quantity: 1,
  });
  useEffect(() => {
    dispatch(getProductBySlug(productSlug));
    return () => {
      dispatch(cleanActiveProduct());
    };
  }, [productSlug]);

  if (activeProduct == null) return;

  const selectedSize = (size) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      size,
    }));
  };
  const onUpdateQuantity = (quantity) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      quantity,
    }));
  };
  const onAddProduct = () => {
    //llamar la accion del context para agregar al carrito
    addProductToCart({
      slug: activeProduct.slug,
      name: activeProduct.name,
      price: activeProduct.price,
      image: activeProduct.image.url,
      category: activeProduct.category.slug,
      quantity: tempCartProduct.quantity,
    });
    navigate("/cart");
  };
  return (
    <div className="mx-auto mt-10 w-10/12">
      <div className="flex flex-col md:flex-row mt-24 md:mt-0">
        <div className="w-full md:w-6/12">
          <img
            src={`${activeProduct.image.url}?w=650`}
            alt={activeProduct.name}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-6/12 p-10">
          <strong className="text-pink-600">
            {activeProduct.category.name}
          </strong>
          <h1 className="text-2xl md:text-3xl font-bold">
            {activeProduct.name}
          </h1>
          <div className="flex flex-col divide-y mt-4">
            <div className="py-3">
              <strong>Precio:</strong>
              <p>{activeProduct.price}</p>
            </div>
            <div className="py-3">
              <strong>Description:</strong>
              <p>{activeProduct.description}</p>
            </div>
            <div className="py-3">
              <ItemCounter
                currentValue={tempCartProduct.quantity}
                updatedQuantity={onUpdateQuantity}
                maxValue={activeProduct.stock > 5 ? 5 : activeProduct.stock}
                label
              />
            </div>
            <div className="py-3">
              <button
                className="bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-4 md:py-2 px-4 border border-pink-500 hover:border-transparent rounded w-full"
                onClick={onAddProduct}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
