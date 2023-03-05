import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContex";

const CartWidget = () => {
  const { numberOfItems } = useContext(CartContext);
  return (
    <div className="flex text-pink-500">
      <Link to="/cart" className="flex">
        <span className="text-2xl relative">
          <span className="absolute right-6 bottom-3 bg-white badge rounded-full h-6 w-6 border border-pink-500 text-xs font-bold flex items-center justify-center">
            {numberOfItems > 9 ? "+9" : numberOfItems}
          </span>
          <i className="ri-shopping-cart-2-fill"></i>
        </span>
      </Link>
    </div>
  );
};
export default CartWidget;
