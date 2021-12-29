import SubReddit from "./SubReddit";
import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { setActiveSub } from "./subRedditsSlice"
import './subReddit.css'

export default function SubReddits(){
    const subs = useSelector(state => state.subReddits.subReddits)
    const dispatch = useDispatch()

    const handleOnClick = (name) => dispatch(setActiveSub(name))
    return (
        <div className='subreddits'>
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
        </div>
    )
}