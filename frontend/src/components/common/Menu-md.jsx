import { useEffect } from "react";

function MenuMd() {
    useEffect(() => {
        document.querySelector('.menu-md__icon').addEventListener('click', function () {
            const menuHide = document.querySelector('.menu-md__hide');
            const menuIcon = document.querySelector('.menu-md__icon');
            
            menuHide.classList.toggle('show');
            menuIcon.classList.toggle('active');
        }, []);
        
        const menuHideLinks = document.querySelectorAll('.menu-md__hide a');
        menuHideLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                const menuHide = document.querySelector('.menu-md__hide');
                const menuIcon = document.querySelector('.menu-md__icon');
                
                menuHide.classList.remove('show');
                menuIcon.classList.remove('active');
            });
        });
    });

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
                        <li className=""><a className="" href="index.php">Accueil</a></li>
                        <li className=""><a className="" href="catalog.php">Catalogue</a></li>
                        <li className=""><a className="" href="portfolio-boutique.php">Portfolio</a></li>
                        <li className=""><a className="" href="legal.php">FAQ</a></li>
                        <li className=""><a className="" href="contact.php">Contact</a></li>
                        <li className=""><a className="" href="blog.php">Blog</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

  
export default MenuMd;