import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContex";
import { currency } from "../../utils";
const OrderSummary = () => {
  const { numberOfItems, subTotal, total, tax } = useContext(CartContext);

  return (
    <div className="flex px-3 justify-center my-3 py-3 flex-col">
      <h1 className="text-pink-500 font-bold my-2">Resumen de la orden</h1>
      <strong># Productos:</strong>
      <p>{numberOfItems}</p>
      <strong>Subtotal:</strong>
      <p>{currency.format(subTotal)}</p>

      <br />
      <div className="divide-y">
        <div className="impuesto mb-3">
          <strong>
            Impuesto: (
            {Number(process.env.REACT_APP_PUBLIC_TAX_RATE) * 100 || 0} %)
          </strong>

          <p>{currency.format(tax)}</p>
        </div>
        <div className="total pt-3">
          <strong className="">Total:</strong>
          <p>{currency.format(total)} </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
