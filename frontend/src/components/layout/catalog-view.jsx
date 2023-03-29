import { useEffect, useState } from "react";
import { useFetch } from "../utils/hooks";
function CatalogView() {
    const { data } = useFetch('http://localhost:3000/api/catalog');
    const [catalogViewData, setCatalogViewData] = useState([]);

    useEffect(() => {
        if (data && Array.isArray(data) && data.length > 0) {
        setCatalogViewData(data.slice(0, 4));
        }
    }, [data]);
    console.log(catalogViewData[0]);
    return (
        <div className="services-section">
            <div className="services">
                {catalogViewData.map((product, index) => {
                    return(
                        <div className="service" key={index}>
                            <img src={product.imageUrl} alt=""/>
                            <p>{product.name}</p>
                            <span>{product.price}€</span>
                        </div>
                    )
                })}
            </div>
            <button className="cta-button">Voir catalogue</button>
        </div>
    );
}

export default CatalogView;
