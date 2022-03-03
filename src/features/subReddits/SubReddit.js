import { capitalizeFirstLetter } from "../../utilities/utilities"
import styled from "styled-components"
import {Link} from 'react-router-dom'

const Sub = styled(Link)`
    text-decoration: none;
    font-weight:600;
    color: ${({theme})=>theme.text};
    :hover {
        color: gray;
    }
    :focus {
        color: gray;
    }
`

export default function SubReddit({id, name, handleOnClick}){ 
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <Sub
            onClick={()=> handleOnClick(name)}
            to={`/${name}`}
        >
                {capitalizeFirstLetter(name)}
        </Sub>
    )
}
