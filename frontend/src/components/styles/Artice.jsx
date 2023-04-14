import styled from 'styled-components';
import theme from '../utils/Variables';

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${theme.layout.spaceBetween30} ${theme.layout.marginLeftRight};
    padding-bottom: ${theme.layout.spaceBetween60};
    margin: auto;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 70%;
        padding: ${theme.layout.spaceBetween60} ${theme.layout.marginLeftRight};
        padding-bottom: ${theme.layout.spaceBetween90};
    }
    h1 {
        color: ${theme.colors.titleH1};
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: ${theme.layout.spaceBetween30};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            font-size: 2rem;
        }
    }
    .date {
        color: ${theme.colors.paragraph};
        font-size: 0.75rem;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            font-size: 0.875rem;
        }
    }
    img {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
    }
    .description {
        color: ${theme.colors.paragraph};
        font-size: 0.9375rem;
        line-height: 1.375rem;
        font-weight: 400;
        margin-bottom: ${theme.layout.spaceBetween60};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            font-size: 1.125rem;
            line-height: 1.75rem;
            margin-bottom: ${theme.layout.spaceBetween90};
        }
    }
    form {
        display: flex;
        flex-direction: column;
        textarea {
            font-family: ${theme.typography.primaryFontFamily};
            font-size: 0.9375rem;
            line-height: 1.375rem;
            font-weight: 400;
            color: ${theme.colors.paragraph};
            width: 80%;
            border: 1px ${theme.colors.c4} solid;
            padding: ${theme.layout.spaceBetween10};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 50%;
                font-size: 1rem;
            }
            &:focus {
                outline: none;
            }
        }
        input[type="submit"] {
            font-family: ${theme.typography.primaryFontFamily};
            font-size: 0.875rem;
            font-weight: 400;
            color: ${theme.colors.white};
            padding: 0.375rem 1.625rem;
            background-color: ${theme.colors.button};
            border-radius: 2rem;
            border-style: none;
            display: inline-block;
            margin: ${theme.layout.spaceBetween10} 0;
            cursor: pointer;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1rem;
                padding: 0.55rem 2.18rem;
                margin: ${theme.layout.spaceBetween20} 0;
            }
        }
    }
`;