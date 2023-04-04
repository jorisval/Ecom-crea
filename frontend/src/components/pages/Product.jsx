import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CatalogView from "../layout/catalog-view";
import { HeaderContext } from "../utils/context";
import { useFetch } from "../utils/hooks";

function Product() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("catalog");
    }, [setActivePage]);

    const { productId } = useParams();
    const { data } = useFetch(`http://localhost:3000/api/catalog/${productId}`);

    return(
        <div className="contact">
            <div className="product-hero">
                <div className="product-hero__part-1">
                    <img src={data.imageUrl} alt=""/>
                </div>
                <div className="product-hero__part-2">
                    <div className="product-title">
                        <h2>{data.name}</h2>
                        <span>{data.price}€</span>
                    </div>
                    <div className="option">
                        <p>Option</p>
                        <div className="option__case">
                            <div>Pack 1</div>
                            <div>Pack 2</div>
                            <div>Pack 3</div>
                            <div>Retouche illimitée</div>
                            <div>Langue au choix</div>
                            <div>Livraison express</div>
                        </div>
                    </div>
                    <div className="quantity">
                        <label  for="quantity">Quantité</label>
                        <button className="quantity__button-down">-</button>
                        <input type="number" id="quantity" defaultValue="1"/>
                        <button className="quantity__button-up">+</button>
                    </div>
                    <button className="add-to-cart">+ Ajouter au panier</button>
                </div>
            </div>
            <div className="product-body">
                {data.description}
            </div>
            <div className="product-catalog-view">
                <div className="solid"></div>
                <h3>Découvrir d'autres services</h3>
                <CatalogView />
            </div>
        </div>
    );
}

export default Product;