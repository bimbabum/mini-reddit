import { createSlice } from "@reduxjs/toolkit";
import { loadPosts } from "../posts/PostsSlice";

const subRedditsSlice = createSlice({
    name: 'subReddits',
    initialState: {
        activeSubReddit: { name: 'Popular' },
        subReddits: [
            { id: 1, name: 'Popular', icon: 'hyperlink' },
            { id: 2, name: 'AskReddit', icon: 'hyperlink' },
            { id: 3, name: 'DestinyTheGame', icon: 'hyperlink' },
            { id: 4, name: 'explainlikeimfive', icon: 'hyperlink' },
            { id: 5, name: 'AskMen', icon: 'hyperlink' },
            { id: 6, name: 'leagueoflegends', icon: 'hyperlink' },
            { id: 7, name: 'Minecraft', icon: 'hyperlink' },
            { id: 8, name: 'anime', icon: 'hyperlink' },
            { id: 9, name: 'IAma', icon: 'hyperlink' },
            { id: 10, name: 'AskWomen', icon: 'hyperlink' },
            { id: 11, name: 'OutOfTheLoop', icon: 'hyperlink' },
            { id: 12, name: 'Fitness', icon: 'hyperlink' },
            { id: 13, name: 'destiny2', icon: 'hyperlink' },
            { id: 14, name: 'classicwow', icon: 'hyperlink' },
            { id: 15, name: 'PS4', icon: 'hyperlink' },
            { id: 16, name: 'discordapp', icon: 'hyperlink' },
            { id: 17, name: 'DnD', icon: 'hyperlink' },
            { id: 18, name: 'FIFA', icon: 'hyperlink' },
            { id: 19, name: 'Instagram', icon: 'hyperlink' },
            { id: 20, name: 'apple', icon: 'hyperlink' },
        ]
    },
    reducers: {
        setActiveSub: (state,action) =>{
            state.activeSubReddit = {name: action.payload}
        }
    }
})

export const {setActiveSub} = subRedditsSlice.actions
export default subRedditsSlice.reducer

export const selectSubReddits = (state) => state.subReddits.subReddits