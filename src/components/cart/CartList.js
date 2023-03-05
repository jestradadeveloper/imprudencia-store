import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContex";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const CartList = ({ editable = false }) => {
  const { cart, updateCartQuantity, removeCartProduct } =
    useContext(CartContext);

  const onNewCartQuantityValue = (product, newQuantityValue) => {
    product.quantity = newQuantityValue;
    updateCartQuantity(product);
  };
  const removeProductInCart = (product) => {
    removeCartProduct(product);
  };

  return (
    <div className="flex flex-col mt-5 divide divide-y w-full">
      {cart &&
        cart.map((product) => (
          <CartItem key={product.slug} product={product} editable />
        ))}
      <OrderSummary />
      <Link to="/login">
        <button className="bg-pink-500 p-3 text-white font-bold text-lg rounded-lg w-full">
          Checkout
        </button>
      </Link>
    </div>
  );
};

export { CartList };
