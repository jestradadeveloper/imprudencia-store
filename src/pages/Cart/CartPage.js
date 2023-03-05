import React from "react";
import { CartList } from "../../components/cart/CartList";

const CartPage = () => {
  return (
    <div className="w-10/12 flex justify-center items-center flex-col mx-auto mt-5 text-center">
      <h1 className="font-bold text-pink-500 text-center text-3xl">Carrito</h1>
      <div className="my-3">
        <CartList editable />
      </div>
    </div>
  );
};

export default CartPage;
