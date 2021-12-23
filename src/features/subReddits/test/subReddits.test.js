import SubReddits from "../SubReddits";
import {render, screen} from '../../../test-utils/testing-library-utils'

describe('render',()=>{
    test('renders 20 subreddits',()=>{
        render(<SubReddits/>)
        const subRedditNodes = screen.getAllByRole('link')
        expect(subRedditNodes.length).toBe(20)
    })
})