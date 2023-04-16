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
    width: 9.375rem;
    height: 22.5rem;
    border-radius: 0.625rem;
    background-color: #f0f0f0;
    background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: ${shimmer} 1.5s infinite;
    margin: auto;
    margin-top: 0;
    margin-bottom: 1rem;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 20rem;
        height: 47.5rem;
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

export const PortfolioShopContainer = styled.div`
    animation: ${fadeIn} 1s ease-in;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    img {
        max-width: 9.375rem;
        height: fit-content;
        border-radius: 0.625rem;
        margin: auto;
        margin-top: 0;
        margin-bottom: 1rem;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            max-width: 20rem;
        }
    }
`;