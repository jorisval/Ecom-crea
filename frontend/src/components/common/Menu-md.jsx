import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../utils/context";

function MenuMd() {
    const {activePage} = useContext(HeaderContext);
    useEffect(() => {
        document.querySelector('.menu-md__icon').addEventListener('click', function () {
            const menuHide = document.querySelector('.menu-md__hide');
            const menuIcon = document.querySelector('.menu-md__icon');
            
            menuHide.classList.toggle('show');
            menuIcon.classList.toggle('active');
        });
        
        const menuHideLinks = document.querySelectorAll('.menu-md__hide a');
        menuHideLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                const menuHide = document.querySelector('.menu-md__hide');
                const menuIcon = document.querySelector('.menu-md__icon');
                
                menuHide.classList.remove('show');
                menuIcon.classList.remove('active');
            });
        });
    }, []);

    return (
        <div className="menu-md">
            <div className="menu-md__icon">
                <div id="icon-bar-one"></div>
                <div id="icon-bar-two"></div>
                <div id="icon-bar-three"></div>
            </div>
            <div className="menu-md__hide">
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
        </div>
    );
}

  
export default MenuMd;