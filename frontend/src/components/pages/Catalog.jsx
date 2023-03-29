import { useContext, useEffect } from "react";
import { HeaderContext } from "../utils/context";

function Catalog() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("catalog");
    }, [setActivePage]);
    return(
        <div className="catalog">
            <div class="pages-title">
            <h1>Catalogue<span class="bi bi-chevron-double-right"></span></h1>
        </div>
        <div class="services-section catalog-services">
            <div class="services">
                <div class="service">
                    <img src="../../assets/images/service-boutique.png" alt=""/>
                    <p>Création de boutique Shopify</p>
                    <span>150€</span>
                </div>
                <div class="service">
                    <img src="../../assets/images/service-video.png" alt=""/>
                    <p>Montage de vidéo publicitaire</p>
                    <span>45€</span>
                </div>
                <div class="service">
                    <img src="../../assets/images/service-copywriting.png" alt=""/>
                    <p>Fiche produit</p>
                    <span>15€</span>
                </div>
                <div class="service">
                    <img src="../../assets/images/service-pack.png" alt=""/>
                    <p>Pack bonus tout pour 200</p>
                    <span>200€</span>
                </div>
                <div class="service">
                    <img src="../../assets/images/service-boutique.png" alt=""/>
                    <p>Création de boutique Shopify</p>
                    <span>150€</span>
                </div>
                <div class="service">
                    <img src="../../assets/images/service-video.png" alt=""/>
                    <p>Montage de vidéo publicitaire</p>
                    <span>45€</span>
                </div>
                <div class="service">
                    <img src="../../assets/images/service-copywriting.png" alt=""/>
                    <p>Fiche produit</p>
                    <span>15€</span>
                </div>
                <div class="service">
                    <img src="../../assets/images/service-pack.png" alt=""/>
                    <p>Pack bonus tout pour 200</p>
                    <span>200€</span>
                </div>
                <div class="service">
                    <img src="../../assets/images/service-boutique.png" alt=""/>
                    <p>Création de boutique Shopify</p>
                    <span>150€</span>
                </div>
                <div class="service">
                    <img src="../../assets/images/service-video.png" alt=""/>
                    <p>Montage de vidéo publicitaire</p>
                    <span>45€</span>
                </div>
                <div class="service">
                    <img src="../../assets/images/service-copywriting.png" alt=""/>
                    <p>Fiche produit</p>
                    <span>15€</span>
                </div>
                <div class="service">
                    <img src="../../assets/images/service-pack.png" alt=""/>
                    <p>Pack bonus tout pour 200</p>
                    <span>200€</span>
                </div>
            </div>
            <button class="cta-button">Voir catalogue</button>
        </div>
        </div>
    );
}

export default Catalog;