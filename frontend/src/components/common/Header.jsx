import Cart from "./Cart";
import MenuMd from "./Menu-md";
import NavLg from "./Nav-lg";
import Logo from "../../assets/images/logo-ecom-crea.png";
import { HeaderContext } from "../utils/context";
import { useContext } from "react";

function Header() {
  const { activePage } = useContext(HeaderContext);

  const handleBagPlusClick = () => {
    document.querySelector('.cart .background').style.display = 'block';
    document.querySelector('.cart-content').classList.add('show');
};

  return (
    <div className={activePage === "home" ? "header home" : "header"}>
      <MenuMd />
      <div className="header__logo">
          <img src={Logo} alt=""/>
      </div>
      <NavLg />
      <div className="header__cart">
          <span className="bi bi-bag-plus" onClick={handleBagPlusClick}></span>
      </div>
      <Cart />
    </div>
  );
}
  
export default Header;
  