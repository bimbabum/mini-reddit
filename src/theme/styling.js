import styled from 'styled-components'

export const breakpoints = {
    sm: '(max-width: 500px)',
    md: '(max-width: 675px)'
}

export const Header = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    margin-bottom: 1.5rem;
    background-color: ${({theme})=> theme.backgroundColor};
`

export const MainAndAside = styled.div`
    display: grid;
    margin: auto;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1.5rem;
    max-width: 1000px;
`

export const Main = styled.div`
    grid-area: 1/span 2;
    @media ${breakpoints.md} {
        grid-area: 1/span 3;
    }
`

export const Aside = styled.div`
    grid-area: span 1;
    @media ${breakpoints.md} {
        display: none;
    }
`