import styled from 'styled-components';
import theme from '../utils/Variables';

export const HomeContainer = styled.div`
.hero {
    display: flex;
    background: url("../../assets/images/hero.png") no-repeat center;
    background-size: cover;
    margin: 0 -0.5rem;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        background: unset;
        background-image: linear-gradient(${theme.colors.backgroundColor1}, ${theme.colors.transparent});
        flex-direction: row;
        justify-content: space-between;
        margin: 0 -8px;
    }
    &__text {
        background-color: rgba(225,225,225,0.9);
        border-radius: 0.5rem;
        padding: 0.5rem;
        z-index: 2;
        width: 80%;
        margin: 3.125rem auto;
        text-align: center;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            padding-top: 8.75rem;
            margin: 0 0 0 ${theme.layout.marginLeftRight};
            width: 50%;
            max-width: 33rem;
            background-color: unset;
            text-align: unset;
            border-radius: 0;
        }
        h1 {
            color: ${theme.colors.primary};
            font-size: 1.5rem;
            font-weight: 800;
            line-height: 2rem;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 2.375rem;
                line-height: 3.2rem;
                text-align: left;
            }
        }
        .subtitle {
            color: ${theme.colors.primary};
            font-size: 1rem;
            font-weight: 800;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                text-align: left;
            }
        }
        .steps {
            display: flex;
            flex-wrap: wrap;
            @media (max-width: ${theme.breakpoints.down.small}) {
                justify-content: center;
            }
            div {
                text-align: center;
                margin: 1rem 0;
                &:not(:last-child) {
                    margin-right: 1.25rem;
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        margin-right: 1.875rem;
                    }
                }
                span {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: ${theme.colors.titleH2};
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        font-size: 2.5rem;
                    }
                }
                p {
                    font-size: 0.875rem;
                    font-weight: 400;
                    color: ${theme.colors.primary};
                    margin: 0.25rem 0;
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        font-size: 1.125rem;
                    }
                }
            }
        }

    }
    &__image {
        display: none;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            display: block;
            max-width: 50%;
        }
        img {
            width: 100%;
        }
    }

}
.benefice-team {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween60};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row-reverse;
        align-items: center;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 50%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        text-align: left;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 45%;
            max-width: 41.25rem;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
        a {
            text-decoration: none;
            color: ${theme.colors.secondary};
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: ${theme.layout.spaceBetween20};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
    }
}
.benefice-mb {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween60};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row;
        align-items: center;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 50%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        text-align: left;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 45%;
            max-width: 41.25rem;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
        a {
            text-decoration: none;
            color: ${theme.colors.secondary};
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: ${theme.layout.spaceBetween20};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
    }
}
.benefice-sav {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween60};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row-reverse;
        align-items: center;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 50%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        text-align: left;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 45%;
            max-width: 41.25rem;
        }
        
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
        a {
            text-decoration: none;
            color: ${theme.colors.secondary};
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: ${theme.layout.spaceBetween20};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
    }
}
.result {
    margin: 0 10%;
    margin-top: ${theme.layout.spaceBetween60};
    text-align: center;
    &__elements {
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
                max-width: 13rem;
            }
        }
    }
}
.why {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90};
    text-align: center;
    &__elements {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &__element {
        width: 12.5rem;
        padding: 1.375rem;
        padding-top: 0;
        text-align: center;
        margin: auto;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 20rem;
        }
        img {
            width: 4.625rem;
            margin-bottom: 0.625rem;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }
        }
    }
}
`;