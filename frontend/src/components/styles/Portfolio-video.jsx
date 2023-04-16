import styled, {keyframes} from 'styled-components';
import theme from '../utils/Variables';

const shimmer = keyframes`
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;

export const SkeletonLoader = styled.div`
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 0.625rem;
    background-color: #f0f0f0;
    background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: ${shimmer} 1.5s infinite;
    margin: auto;
    margin-bottom: 1rem;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 20rem;
        height: 20rem;
        margin-bottom: 1.25rem;
    }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const PortfolioVideoContainer = styled.div`
    animation: ${fadeIn} 1s ease-in;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .video-container {
        max-width: 12.5rem;
        margin: auto;
        margin-bottom: 1rem;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            max-width: 20rem;
            margin-bottom: 1.25rem;
        }
        video {
            width: 100%;
            height: 100%;
            border-radius: 0.625rem;
        }
    }
`;