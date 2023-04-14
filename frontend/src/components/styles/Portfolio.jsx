import styled from 'styled-components';
import theme from '../utils/Variables';

export const PortfolioContainer = styled.div`
    margin: 0 10%;
    margin-bottom: ${theme.layout.spaceBetween20};
    @media (min-width: ${theme.breakpoints.up.medium}) {
        ${theme.layout.spaceBetween60};
    }
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
    .portfolio {
        &__menu {
            display: flex;
            justify-content: center;
            list-style-type: none;
            margin: 0px;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin-bottom: ${theme.layout.spaceBetween60};
            }
            padding: 0px;
            li {
                margin-right: ${theme.layout.spaceBetween20};
            }
            a {
                text-decoration: none;
                color: ${theme.colors.nav};
                font-size: 1.125rem;
                font-weight: 500;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.375rem;
                }
                &:hover {
                    color: ${theme.colors.secondary};
                }
                &.active {
                    color: ${theme.colors.secondary};
                }
            }
        }
        &-button {
            text-align: center;
        }
    }
`;