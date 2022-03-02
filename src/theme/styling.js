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

export const H2 = styled.h2`
    color: ${({theme})=> theme.text};
    font-size: 1.5rem;
    padding: 0.5rem;
    line-height: 2rem;
    text-align: ${props => {
        if(props.center) {
            return 'center'
        } else if (props.right) {
            return 'right'
        } else {
            return 'left'
        }
    }}
`

export const Container = styled.div`
    display: ${props => props.disable? 'none':'block'}
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.backgroundColor};
    border: 1px solid ${({theme}) => theme.boxShadow};
    border-radius: 0.5rem;
    box-shadow: 0.15rem 0.15rem ${({theme})=>theme.boxShadow};
    padding: 1rem;
    margin: 0.5rem auto;
    text-align: ${props => {
        if(props.center) {
            return 'center'
        } else if (props.right) {
            return 'right'
        } else {
            return 'left'
        }
    }}
`
