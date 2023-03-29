import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../utils/context";

function PortfolioBoutique() {
    const { activePage, setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("portfolio-boutiques");
    }, [setActivePage]);
    return(
        <div className="portfolio-boutique">
            <div className="pages-title">
                <h1>Portfolio<span className="bi bi-chevron-double-right"></span></h1>
            </div>
            <div className="portfolio">
                <ul className="portfolio__menu">
                    <li className="boutiques">
                        <Link to="/portfolio-boutiques" className={activePage === "portfolio-boutiques" ? "active" : ""}>Boutiques</Link>
                    </li>
                    <li className="videos">
                        <Link to="/portfolio-videos" className={activePage === "portfolio-videos" ? "active" : ""}>Videos</Link>
                    </li>
                </ul>
                <div className="portfolio__boutique-contents">
                    <img src={require("../../assets/images/boutique-1.png").default} alt=""/>
                    <img src="../../assets/images/boutique-2.png" alt=""/>
                    <img src="../../assets/images/boutique-3.png" alt=""/>
                    <img src="../../assets/images/boutique-4.png" alt=""/>
                    <img src="../../assets/images/boutique-5.png" alt=""/>
                    <img src="../../assets/images/boutique-6.png" alt=""/>
                </div>
            </div>
            <div className="portfolio-button">
                <button className="cta-button">Je veux les mêmes</button>
            </div>
        </div>
    );
}

export default PortfolioBoutique;