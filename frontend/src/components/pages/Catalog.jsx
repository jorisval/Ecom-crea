import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../utils/context";
import { useFetch } from "../utils/hooks";
import { CatalogContainer } from "../styles/Catalog";

function Catalog() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("catalog");
    }, [setActivePage]);
    const { data } = useFetch('http://localhost:3000/api/catalog');
    const[showCount, setShowCount] = useState(8);
    const handleClick = () => {
        setShowCount(showCount + 8);
    }
    /*const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(12);
    const indexOfLastProduct = currentPage * perPage;
    const indexOfFirstProduct = indexOfLastProduct - perPage;
    const currentProducts = data?.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageNumber = [];

    for(let i=1; i <= Math.ceil(data?.length / perPage); i++) {
        pageNumber.push(i);
    }

    const handleClick = (event) => {
        setCurrentPage(event.target.id)
    }*/

    return(
        <CatalogContainer className="catalog">
            <div className="pages-title">
            <h1>Catalogue<span className="bi bi-chevron-double-right"></span></h1>
        </div>
        <div className="services-section catalog-services">
            <div className="services">
                { Array.isArray(data) && data.slice(0, showCount).map((product) => {
                    return(
                        <div className="service" key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <img src={product.images[0]} alt=""/>
                                <p>{product.name}</p>
                                <span>{product.price}€</span>
                            </Link>
                        </div>
                    )
                }) }
            </div>
            {showCount < data?.length && (
                <button className="cta-button" onClick={handleClick}>Voir plus</button>
            )}
        </div>
        </CatalogContainer>
    );
}

export default Catalog;