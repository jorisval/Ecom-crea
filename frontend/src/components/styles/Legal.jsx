import styled from 'styled-components';
import theme from '../utils/Variables';

export const FaqContainer = styled.div`
    color: ${theme.colors.paragraph};
    font-size: 0.9375rem;
    line-height: 1.375rem;
    font-weight: 400;
    margin: auto;
    margin-top: ${theme.layout.spaceBetween30};
    margin-bottom: ${theme.layout.spaceBetween60};
    width: 80%;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        font-size: 1.125rem;
        line-height: 1.75rem;
        width: 70%;
        margin-top: ${theme.layout.spaceBetween60};
        margin-bottom: ${theme.layout.spaceBetween90};
    }
`;