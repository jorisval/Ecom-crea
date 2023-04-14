import styled from 'styled-components';
import theme from '../utils/Variables';

export const PortfolioVideoContainer = styled.div`
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