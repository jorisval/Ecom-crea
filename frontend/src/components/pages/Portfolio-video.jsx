import { PortfolioVideoContainer, SkeletonLoader } from "../styles/Portfolio-video";
import { useFetch } from "../utils/hooks";
import { BASE_URL } from '../../config';

function PortfolioVideo() {
    const { data, dataIsLoading } = useFetch(`${BASE_URL}/api/portfolio-video`);

    return(
        <PortfolioVideoContainer className="portfolio__video-contents">
            {dataIsLoading
                    ? Array.from({ length: 9 }).map((_, i) => <SkeletonLoader key={i} />)
                    : Array.isArray(data) && data.map((video) => {
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