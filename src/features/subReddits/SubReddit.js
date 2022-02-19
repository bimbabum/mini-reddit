import { capitalizeFirstLetter } from "../../utilities/utilities"
import styled from "styled-components"

const Sub = styled.a`
    text-decoration: none;
    font-weight:600;
    color: ${({theme})=>theme.text};
    :hover {
        color: gray;
    }
`

export default function SubReddit({id, name, handleOnClick}){ 
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Sub 
            href='#' 
            onClick={()=> handleOnClick(name)}
        >
            {capitalizeFirstLetter(name)}
        </Sub>
    )
}