import { PortfolioVideoContainer } from "../styles/Portfolio-video";
import { useFetch } from "../utils/hooks";

function PortfolioVideo() {
    const { data } = useFetch('http://localhost:3000/api/portfolio-video');

    return(
        <PortfolioVideoContainer className="portfolio__video-contents">
            {Array.isArray(data) && data.map((video) => {
                return(
                    <div className="video-container" key={video._id}>
                        <video controls>
                            <source src={video.videoUrl} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )
            })}
        </PortfolioVideoContainer>
    );
}

export default PortfolioVideo;