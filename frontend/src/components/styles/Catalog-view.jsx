import styled from 'styled-components';
import theme from '../utils/Variables';

export const CatalogViewContainer = styled.div`
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90}; 
    text-align: center;
    .services {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .service {
            width: 14.375rem;
            border-radius: 0.625rem;
            text-align: center;
            font-weight: 400;
            font-size: 1.125rem;
            background-color: ${theme.colors.backgroundColor3};
            padding-bottom: 0.9375rem;
            margin: auto;
            margin-bottom: 2.1875rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 20rem;
                font-size: 1.25rem;
                padding-bottom: 1.875rem;
            }
            a {
                text-decoration: none;
            }
            img {
                width: 100%;
                border-radius: 0.625rem 0.625rem 0 0;
                margin-bottom: 0.9375rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    margin-bottom: 1.875rem;
                }
            }
            p {
                color: ${theme.colors.titleH3};
                margin: 0 0 0.875rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    margin-bottom: 1rem;
                }
            }
            span {
                color: ${theme.colors.secondary};
            }
        }
    }
`;