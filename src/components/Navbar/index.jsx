import Brand from "./Brand";
import { Menu } from "./Menu";
import CartWidget from "../CartWidget";
import { AuthUser } from "../AuthUser";
export const Navbar = () => {
  return (
    <div className="w-full bg-yellow-100 md:relative fixed top-0 left-0 right-0">
      <div className="container mx-auto flex items-center justify-around">
        <Brand />
        <Menu />
        <CartWidget />
        <AuthUser />
      </div>
    </div>
  );
};
