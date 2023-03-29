import Cart from "./Cart";
import MenuMd from "./Menu-md";
import NavLg from "./Nav-lg";
import Logo from "../../assets/images/logo-ecom-crea.png";
import { HeaderContext } from "../utils/context";
import { useContext } from "react";

function Header() {
  const { activePage } = useContext(HeaderContext);
  return (
    <div className={activePage === "home" ? "header home" : "header"}>
      <MenuMd />
      <div className="header__logo">
          <img src={Logo} alt=""/>
      </div>
      <NavLg />
      <div className="header__cart">
          <span className="bi bi-bag-plus"></span>
      </div>
      <Cart />
    </div>
  );
}
  
export default Header;
  