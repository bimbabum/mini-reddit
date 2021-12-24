import { capitalizeFirstLetter } from "../../utilities/utilities"

export default function SubReddit({id, name, handleOnClick}){ 
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a 
            href='#' 
            onClick={()=> handleOnClick(name)}
        >
            {capitalizeFirstLetter(name)}
        </a>
    )
}