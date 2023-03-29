import { createGlobalStyle } from 'styled-components';
import theme from '../utils/Variables';
const HeaderContainer = createGlobalStyle`
  .header {
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 0 ${theme.layout.marginLeftRight};
    margin: -0.5rem;
    margin-bottom: 0;
    font-size: ${theme.typography.navFontSize};

    &.home {
        @media (min-width: ${theme.breakpoints.up.medium}) {
        background-color: ${theme.colors.backgroundColor1};
        }
    }

    .menu-md {
        display: block;

        @media (min-width: ${theme.breakpoints.up.medium}) {
        display: none;
        }

        &__icon {
        width: ${theme.layout.menuTabWidth};
        height: 40px;
        position: absolute;
        z-index: 100;
        top: 0px;
        left: 20px;
        padding-top: 15px;
        cursor: pointer;
        transition: all 0.6s ease-in-out;

        div {
            height: 2.5px;
            background-color: ${theme.colors.nav};
            display: block;
            margin: 5px;
            transition: all 0.6s ease-in-out;
        }

        &.active {
            left: calc(100vw - ${theme.layout.menuTabWidth});
            transition: all 600ms ease-in-out;
            background-color: ${theme.colors.paragraph};
            position: fixed;

            #icon-bar-one {
            transform: translateY(7.5px) rotate(-135deg);
            transition: all 0.6s ease-in-out;
            background-color: ${theme.colors.secondary};
            }

            #icon-bar-two {
            opacity: 0;
            transition: 0.4s ease;
            }

            #icon-bar-three {
            transform: translateY(-8px) rotate(-45deg);
            transition: all 0.6s ease-in-out;
            background-color: ${theme.colors.secondary};
            }
        }
        }

        &__hide {
        width: calc(100vw - ${theme.layout.menuTabWidth});
        left: calc(${theme.layout.menuTabWidth} - 100vw);
        height: 100vh;
        position: absolute;
        z-index: 10;
        top: 0px;
        transition: all 0.6s ease-in-out;

        li {
            height: 70px;
            list-style-type: none;
            text-align: center;
            line-height: 70px;
            transition: all 0.5s ease;

            &:hover {
            background-color: ${theme.colors.secondary};
            transition: all 0.5s ease;
            }
        }

        a {
            padding: 30px 25px;
            text-decoration: none;
            color: ${theme.colors.white};
            font-weight: 800;
        }

        &.show {
            left: 0px;
            background-color: ${theme.colors.paragraph};
            transition: all 0.6s ease-in-out;
            position: fixed;
        }
        }
    }

    &__logo {
        margin-right: 0%;
        padding: 15px;
        padding-left: 0;
        text-align: center;

        img {
        height: 1.625rem;

        @media (min-width: ${theme.breakpoints.up.medium}) {
            height: 2rem;
        }
        }

        @media (min-width: ${theme.breakpoints.up.medium}) {
        margin-right: 15%;
        }
    }

    .nav-lg {
        display: none;

        @media (min-width: ${theme.breakpoints.up.medium}) {
        display: block;
        }

        width: 40%;
        margin-right: 10%;

        ul {
        display: flex;
        list-style-type: none;
        margin: 0px;
        padding: 0px;

        .active {
            a {
            color: ${theme.colors.secondary};
            }
        }
        }

        li {
        padding: 20px 3%;
        }

        a {
        text-decoration: none;
        color: ${theme.colors.nav};
        font-weight: bold;

        &:hover {
            color: ${theme.colors.secondary};
        }
        }
    }

    &__cart {
        text-align: center;
        padding: 15px 0;
    }

    .bi-bag-plus {
        font-size: 1.25rem;
        color: ${theme.colors.nav};
        cursor: pointer;

        @media (min-width: ${theme.breakpoints.up.medium}) {
        font-size: 1.5rem;
        }
    }

    .cart {
        position: absolute;
        z-index: 100;

        .background {
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 0;
        right: 0;
        display: none;
        }

        &-content {
        box-sizing: border-box;
        width: 35%;
        min-width: 280px;
        height: 100vh;
        padding: 0.5rem 1rem;
        background-color: ${theme.colors.white};
        color: ${theme.colors.paragraph};
        position: fixed;
        top: 0;
        left: 100%;
        transition: left 400ms ease;

        &__header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding-bottom: 0.375rem;
            border-bottom: 1px ${theme.colors.colorC4} solid;
            font-size: 0.875rem;

            @media (min-width: ${theme.breakpoints.up.large}) {
            font-size: 1rem;
            }
        }

        &-product {
            font-size: 0.875rem;
            display: flex;
            margin-top: 0.9375rem;
            padding-bottom: 0.75rem;
            border-bottom: 1px ${theme.colors.colorC4} solid;

            @media (min-width: ${theme.breakpoints.up.large}) {
            font-size: 1rem;
            }

            &__part1 {
            width: 30%;
            margin-right: 0.625rem;

            img {
                width: 100%;
                max-width: 6.25rem;
                border-radius: 0.5rem;
            }
            }

            &__part2 {
                width: 70%;
                margin-right: 0.625rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                &-title {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.5rem;
                }

                &-option {
                margin-bottom: 0.5rem;
                }

                &-quantity {
                display: flex;
                justify-content: space-between;

                .quantity {
                    color: ${theme.colors.paragraph};

                    button {
                    font-size: 0.875rem;
                    color: ${theme.colors.paragraph};
                    padding: 0.25rem 0.5rem;
                    border: 1px ${theme.colors.colorC4} solid;
                    background-color: ${theme.colors.white};
                    cursor: pointer;
                    }

                    input {
                    font-size: 0.875rem;
                    color: ${theme.colors.paragraph};
                    padding-top: 0.25rem;
                    padding-bottom: 0.25rem;
                    text-align: center;
                    width: 30px;
                    border: 1px ${theme.colors.colorC4} solid;
                    margin: 0 -6px;

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

                .price {
                    padding-top: 0.625rem;
                }
                }
            }
            }

            &-subtotal {
            font-size: 0.875rem;
            display: flex;
            justify-content: space-between;
            margin-top: 1.25rem;

            @media (min-width: ${theme.breakpoints.up.large}) {
                font-size: 1rem;
            }
            }

            &-payment {
            text-align: center;
            margin-top: 1.875rem;
            }

            .price {
            color: ${theme.colors.secondary};
            }

            .bi-x {
            cursor: pointer;
            }

            &.show {
            left: calc(100% - 280px);

            @media all and (min-width: 800px) {
                left: calc(100% - 35%);
            }
            }
        }
        }
    }
  }
`;

function StyledHeader() {
    return <HeaderContainer />
}
  
export default StyledHeader;