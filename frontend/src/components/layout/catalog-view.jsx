import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../utils/hooks";
import { CatalogViewContainer, SkeletonLoader } from "../styles/Catalog-view";
import { BASE_URL } from '../../config';

function CatalogView() {
    const { data, dataIsLoading } = useFetch(`${BASE_URL}/api/catalog`);
    const [catalogViewData, setCatalogViewData] = useState([]);

    useEffect(() => {
        if (data && Array.isArray(data) && data.length > 0) {
        setCatalogViewData(data.slice(0, 4));
        }
    }, [data]);
    return (
        <CatalogViewContainer className="services-section">
            <div className="services">
                { dataIsLoading ? 
                    Array.from({ length : 4 }).map((_, i) => <SkeletonLoader key={i} />)
                    : (catalogViewData.map((product, index) => {
                        return(
                            <div className="service" key={index}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product.images[0]} alt=""/>
                                    <p>{product.name}</p>
                                    <span>{product.price}€</span>
                                </Link>
                            </div>
                        )
                    }))
                }
            </div>
            <Link to='/catalog' className="cta-button">Voir catalogue</Link>
        </CatalogViewContainer>
    );
}

export default CatalogView;
