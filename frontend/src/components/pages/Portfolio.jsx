import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../utils/context";
import PortfolioBoutique from "./Portfolio-boutique";
import PortfolioVideo from "./Portfolio-video";

function Portfolio() {
    const { activePage, setActivePage } = useContext(HeaderContext);
    
    useEffect(() => {
        activePage === 'portfolio-videos' ? setActivePage("portfolio-videos") : setActivePage("portfolio-boutiques");
    },[activePage, setActivePage]);

    return(
        <div className="portfolio-boutique">
            <div className="pages-title">
                <h1>Portfolio<span className="bi bi-chevron-double-right"></span></h1>
            </div>
            <div className="portfolio">
                <ul className="portfolio__menu">
                    <li className="boutiques">
                        <Link to="" className={activePage === "portfolio-boutiques" ? "active" : ""} onClick={() => setActivePage('portfolio-boutiques')}>Boutiques</Link>
                    </li>
                    <li className="videos">
                        <Link to="" className={activePage === "portfolio-videos" ? "active" : ""} onClick={() => setActivePage('portfolio-videos')}>Videos</Link>
                    </li>
                </ul>
                { activePage === 'portfolio-boutiques' ? 
                    (<PortfolioBoutique />) : 
                    (<PortfolioVideo />) 
                }
            </div>
            <div className="portfolio-button">
                <Link to='/catalog' className="cta-button">Je veux les mêmes</Link>
            </div>
        </div>
    );
}

export default Portfolio;