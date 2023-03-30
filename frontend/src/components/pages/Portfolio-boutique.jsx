import { useFetch } from "../utils/hooks";

function PortfolioBoutique() {
    const { data } = useFetch('http://localhost:3000/api/portfolio-shop');

    return(
        <div className="portfolio__boutique-contents">
            {Array.isArray(data) && data.map((shop) => {
                return(
                    <img src={shop.imageUrl} key={shop._id} alt=""/>
                )
            })}
        </div>
    );
}

export default PortfolioBoutique;