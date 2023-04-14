import { PortfolioShopContainer } from "../styles/Portfolio-shop";
import { useFetch } from "../utils/hooks";

function PortfolioBoutique() {
    const { data } = useFetch('http://localhost:3000/api/portfolio-shop');

    return(
        <PortfolioShopContainer className="portfolio__boutique-contents">
            {Array.isArray(data) && data.map((shop) => {
                return(
                    <img src={shop.imageUrl} key={shop._id} alt=""/>
                )
            })}
        </PortfolioShopContainer>
    );
}

export default PortfolioBoutique;