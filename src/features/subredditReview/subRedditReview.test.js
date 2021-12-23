import SubredditReview from "./SubredditReview";
import {screen, render} from '@testing-library/react'

describe('render',()=>{
    test('renders name, number, online',()=>{
        render(<SubredditReview/>)
    })
})