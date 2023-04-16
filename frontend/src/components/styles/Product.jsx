import styled, {keyframes} from 'styled-components';
import theme from '../utils/Variables';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ProductContainer = styled.div`
    animation: ${fadeIn} 1s ease-in;
    .product-hero {
        padding: ${theme.layout.spaceBetween30} ${theme.layout.marginLeftRight};
        margin: 0 -0.5rem;
        background-color: ${theme.colors.f6};

        @media (min-width: ${theme.breakpoints.up.small}) {
            display: flex;
        }

        &__part-1 {
            max-width: 30rem;
            margin: auto;

            @media (min-width: ${theme.breakpoints.up.small}) {
                margin: unset;
                margin-right: 0.5rem;
            }

            img {
                width: 100%;
                border-radius: 0.625rem;
            }
        }

        &__part-2 {
            font-size: 1.125rem;
            font-weight: 400;
            margin: auto;

            @media (min-width: ${theme.breakpoints.up.small}) {
                margin: unset;
                font-size: 1.25rem;
                padding-left: 0.605rem;
            }

            @media (min-width: ${theme.breakpoints.up.medium}) {
                padding-left: 1rem;
            }

            > div {
                margin-bottom: ${theme.layout.spaceBetween20};

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    margin-bottom: ${theme.layout.spaceBetween30};
                }
            }

            h2 {
                font-size: 1.5rem;
                margin-top: 1rem;

                @media (min-width: ${theme.breakpoints.up.small}) {
                    margin-top: 0.5rem;
                }

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.875rem;
                }
            }

            .product-title {
                margin-bottom: ${theme.layout.spaceBetween20};

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    margin-bottom: ${theme.layout.spaceBetween30};
                }

                span {
                    color: ${theme.colors.secondary};
                    font-size: 1.25rem;

                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        font-size: 1.5rem;
                    }
                }
            }

            .option {
                color: ${theme.colors.paragraph};

                p {
                    margin-bottom: 1rem;
                }

                &__case {
                    display: flex;
                    flex-wrap: wrap;

                    div {
                        font-size: 1rem;
                        margin-left: 0.625rem;
                        margin-bottom: 0.375rem;
                        padding: 0.125rem 0.25rem;
                        background-color: ${theme.colors.white};
                        border: 1px ${theme.colors.c4} solid;
                        cursor: pointer;

                        @media (min-width: ${theme.breakpoints.up.medium}) {
                            font-size: 1.125rem;
                            padding: 0.25rem 0.5rem;
                        }
                        &.active {
                            color: ${theme.colors.secondary};
                            border: 1px ${theme.colors.secondary} solid;
                        }
                    }
                }
            }

            .quantity {
                color: ${theme.colors.paragraph};

                label {
                    margin-bottom: 1rem;
                    margin-right: 0.625rem;
                }

                button {
                    font-size: 1rem;
                    color: ${theme.colors.paragraph};
                    padding: 0.25rem 0.5rem;
                    border: 1px ${theme.colors.c4} solid;
                    background-color: ${theme.colors.white};
                    cursor: pointer;
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        font-size: 1.125rem;
                    }
                }

                input {
                    font-size: 1rem;
                    color: ${theme.colors.paragraph};
                    padding-top: 0.25rem;
                    padding-bottom: 0.25rem;
                    text-align: center;
                    width: 30px;
                    border: 1px ${theme.colors.c4} solid;
                    margin: 0 -0.375rem;

                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        font-size: 1.125rem;
                    }

                    &::-webkit-inner-spin-button {
                        display: none;
                    }

                    &::-webkit-outer-spin-button {
                        display: none;
                    }

                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }

    .product-body {
        padding: ${theme.layout.spaceBetween30} ${theme.layout.marginLeftRight};
        color: ${theme.colors.paragraph};
        font-size: 1.125rem;
        font-weight: 400;

        @media (min-width: ${theme.breakpoints.up.medium}) {
            font-size: 1.25rem;
            width: 70%;
            margin: auto;
        }
    }

    .product-catalog-view {
        .solid {
            width: 25%;
            margin: auto;
            border-top: 1px ${theme.colors.c4} solid;
            margin-bottom: ${theme.layout.spaceBetween60};
        }

        h3 {
            text-align: center;
            margin-bottom: -${theme.layout.spaceBetween60};
        }
    }
`;
    
export default ProductContainer;
