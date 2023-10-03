import { PortfolioShopContainer, SkeletonLoader } from "../styles/Portfolio-shop";
import { useFetch } from "../utils/hooks";
import { BASE_URL } from '../../config';

function PortfolioBoutique() {
    const { data, dataIsLoading } = useFetch(`${BASE_URL}/api/portfolio-shop`);

    return(
        <PortfolioShopContainer className="portfolio__boutique-contents">
            {dataIsLoading
                    ? Array.from({ length: 6 }).map((_, i) => <SkeletonLoader key={i} />)
                    : Array.isArray(data) && data.map((shop) => {
                return(
                    <img src={shop.imageUrl} key={shop._id} alt=""/>
                )
            })}
        </PortfolioShopContainer>
    );
}

export default PortfolioBoutique;