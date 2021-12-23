import { capitalizeFirstLetter } from "../../utilities/utilities"
export default function SubReddit({subReddit}){
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <li><a href='#'>{capitalizeFirstLetter(subReddit)}</a></li>
    )
}