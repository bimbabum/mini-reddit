import SubReddit from "./SubReddit";
import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { setActiveSub } from "./subRedditsSlice"

export default function SubReddits(){
    const subs = useSelector(state => state.subReddits.subReddits)
    const dispatch = useDispatch()

    const handleOnClick = (id) => dispatch(setActiveSub(id))
    return (
        <>
            <h2>Sub Reddits</h2>
            <ul>
                {subs.map(sub => (
                    <li key={sub.id}>
                        <SubReddit 
                            id={sub.id} 
                            name={sub.name} 
                            handleOnClick={handleOnClick}/>
                    </li>))}
            </ul>
        </>
    )
}