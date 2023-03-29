import { useContext, useEffect } from "react";
import { HeaderContext } from "../utils/context";

function PortfolioVideo() {
    const { setActivePage } = useContext(HeaderContext);
    useEffect(() => {
        setActivePage("portfolio-boutiques");
    }, [setActivePage]);
    return(
        <div className="portfolio-video">
            <div className="pages-title">
                <h1>Portfolio<span className="bi bi-chevron-double-right"></span></h1>
            </div>
            <div className="portfolio">
                <ul className="portfolio__menu">
                    <li className="boutiques">
                        <a href="#b" className="">Boutiques</a>
                    </li>
                    <li className="videos">
                        <a href="#b" className="active">Vidéos</a>
                    </li>
                </ul>
                <div className="portfolio__video-contents">
                    <div className="video-container">
                        <video controls>
                            <source src="../../assets/videos/video-hair-1.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="video-container">
                        <video controls>
                            <source src="../../assets/videos/video-toy-1.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="video-container">
                        <video controls>
                            <source src="../../assets/videos/video-toy-2.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="video-container">
                        <video controls>
                            <source src="../../assets/videos/video-hair-1.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="video-container">
                        <video controls>
                            <source src="../../assets/videos/video-toy-1.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="video-container">
                        <video controls>
                            <source src="../../assets/videos/video-toy-2.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="video-container">
                        <video controls>
                            <source src="../../assets/videos/video-hair-1.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="video-container">
                        <video controls>
                            <source src="../../assets/videos/video-toy-1.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="video-container">
                        <video controls>
                            <source src="../../assets/videos/video-toy-2.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <div className="portfolio-button">
                <button className="cta-button">Je veux les mêmes</button>
            </div>
        </div>
    );
}

export default PortfolioVideo;