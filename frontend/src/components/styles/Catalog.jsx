import styled from 'styled-components';
import theme from '../utils/Variables';

export const CatalogContainer = styled.div`
    .pages-title {
        padding: ${theme.layout.spaceBetween30} ${theme.layout.marginLeftRight};
        padding-bottom: ${theme.layout.spaceBetween10};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            padding: ${theme.layout.spaceBetween60} ${theme.layout.marginLeftRight};
            padding-bottom: ${theme.layout.spaceBetween10};
        }
        h1 {
            color: ${theme.colors.titleH1};
            font-size: 1.25rem;
            font-weight: 800;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.75rem;
            }
            .bi-chevron-double-right {
                font-size: 1rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.375rem;
                }
            }
        }
    }
    .services-section.catalog-services {
        margin-top: ${theme.layout.spaceBetween10};
        margin: 0 ${theme.layout.marginLeftRight}; 
        text-align: center;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            margin-top: ${theme.layout.spaceBetween20};
        }
        a {
            text-decoration: none;
        }
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
    }
`;