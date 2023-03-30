import { createGlobalStyle } from 'styled-components';
import theme from '../utils/Variables';

const FooterContainer = createGlobalStyle`
    .footer {
        padding: 0 ${theme.space.marginLeftRight};
        padding-top: ${theme.space.spaceBetween30};
        padding-bottom: 1.25rem;
        margin: 0 -0.5rem;
        margin-top: ${theme.space.spaceBetween90};
        color: ${theme.colors.paragraph};
        border-top: 1px rgba(12, 82, 89, 0.20) solid;
        background-image: linear-gradient(${theme.colors.transparent}, ${theme.colors.backgroundColor2});

        &__part-1 {
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: ${theme.space.spaceBetween60};

            @media (min-width: ${theme.breakpoints.up.medium}) {
            flex-direction: row;
            flex-wrap: wrap;
            font-size: 1.125rem;
            margin-bottom: ${theme.space.spaceBetween90};
            }

            div {
            padding: 1rem;
            }

            h3 {
            font-size: 1.125rem;
            color: ${theme.colors.titleH3};
            font-weight: bold;
            margin-bottom: 0.625rem;

            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.25rem;
            }
            }

            ul {
            padding-left: 0;
            }

            li {
            list-style-type: none;
            margin: 0.25rem 0;
            }

            a {
            text-decoration: none;
            color: ${theme.colors.paragraph};

            &:hover {
                color: ${theme.colors.secondary};
            }
            }

            form {
            display: flex;
            width: 100%;
            }

            input[type="email"] {
            font-size: 0.875rem;
            color: ${theme.colors.paragraph};
            padding: 0.25rem 0.5rem;
            border: 2px ${theme.colors.button} solid;
            border-radius: 2rem 0 0 2rem;
            width: 65%;

            @media (min-width: ${theme.breakpoints.up.medium}) {
                padding: 0.5rem 1rem;
                font-size: 1rem;
            }
            }

            input[type="submit"] {
            font-size: 0.875rem;
            color: ${theme.colors.white};
            background-color: ${theme.colors.button};
            padding: 0.25rem 0.5rem;
            border: 2px ${theme.colors.button} solid;
            border-radius: 0 2rem 2rem 0;
            margin-left: -5px;

            @media (min-width: ${theme.breakpoints.up.medium}) {
                padding: 0.5rem 1rem;
                font-size: 1rem;
            }
            }
        }

        &__part-2 {
            font-size: 1rem;
            font-weight: 500;

            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.125rem;
            }

            p {
                margin: 0;
            } 
        }
    }
`;

function StyledFooter() {
    return <FooterContainer />
}

export default StyledFooter;