import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemCounter } from "../ui/ItemCounter";
import { CartContext } from "../../context/cart/CartContex";
import { currency } from "../../utils";
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
        <div className="flex items-center md:justify-between w-full md:divide-x divide-pink-200 justify-center md:flex-nowrap flex-wrap">
          <div className="flex mr-3 px-2">
            <strong className="mr-2">Precio</strong>
            <span className="mr-3">{currency.format(product.price)}</span>
          </div>
          <div className="flex px-2 w-full">
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
              {currency.format(product.quantity * product.price)}
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
