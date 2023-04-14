import styled from 'styled-components';
import theme from '../utils/Variables';

export const PortfolioShopContainer = styled.div`
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