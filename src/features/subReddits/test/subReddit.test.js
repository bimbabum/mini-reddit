import SubReddit from "../subReddit";
import {screen,render} from '@testing-library/react'

describe('render',()=>{
    test('renders subreddit through props',()=>{
        render(<SubReddit subReddit='Popular'/>)
        const subReddit = screen.getByText(/popular/i)
        expect(subReddit).toBeInTheDocument()
    })
})

