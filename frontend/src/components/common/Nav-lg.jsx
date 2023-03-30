import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../utils/context";

function NavLg() {
    const {activePage} = useContext(HeaderContext);
    return (
        <div className="nav-lg">
            <nav>
                <ul className="">
                    <li className={ activePage === "home" ? "active" : "" }><Link to="/">Accueil</Link></li>
                    <li className={ activePage === "catalog" ? "active" : "" }><Link to="/catalog">Catalogue</Link></li>
                    <li className={ activePage === "portfolio-boutiques" || activePage === "portfolio-videos" ? "active" : "" }><Link to="/portfolio">Portfolio</Link></li>
                    <li className={ activePage === "faq" ? "active" : "" }><Link to="/faq">FAQ</Link></li>
                    <li className={ activePage === "contact" ? "active" : "" }><Link to="/contact">Contact</Link></li>
                    <li className={ activePage === "blog" ? "active" : "" }><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavLg;