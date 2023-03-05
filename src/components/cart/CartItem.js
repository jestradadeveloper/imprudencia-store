import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemCounter } from "../ui/ItemCounter";
import { CartContext } from "../../context/cart/CartContex";

const CartItem = ({ product, editable }) => {
  const { updateCartQuantity, removeCartProduct } = useContext(CartContext);

  const onNewCartQuantityValue = (product, newQuantityValue) => {
    product.quantity = newQuantityValue;
    updateCartQuantity(product);
  };
  const removeProductInCart = (product) => {
    removeCartProduct(product);
  };

  return (
    <div key={product.slug} className="flex w-full items-center p-2">
      <div className="w-full flex items-center justify-between flex-col">
        <Link
          to={`/${product.category}/${product.slug}`}
          className="hover:text-pink-700 text-pink-500 font-bold py-2 px-4 rounded"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-between w-full divide-x divide-pink-200">
          <div className="flex mr-3 px-2">
            <strong className="mr-2">Precio</strong>
            <span className="mr-3">$ {product.price}.00</span>
          </div>
          <div className="flex px-2">
            {editable ? (
              <ItemCounter
                currentValue={product.quantity}
                updatedQuantity={(newValue) => {
                  onNewCartQuantityValue(product, newValue);
                }}
                maxValue={10}
                label={false}
              />
            ) : (
              <span variant="h5">
                {product.quantity}{" "}
                {product.quantity > 1 ? "productos" : "producto"}
              </span>
            )}
          </div>
          <div className="flex px-4">
            <strong className="text-pink-500">
              $ {product.quantity * product.price}
            </strong>
          </div>
          <div>
            {editable && (
              <button
                className="font-bold text-xl text-red-300 mx-3"
                onClick={() => {
                  removeProductInCart(product);
                }}
              >
                <i className="ri-delete-bin-7-fill"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
