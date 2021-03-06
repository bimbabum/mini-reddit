import SubReddit from "../subReddit";
import {screen,render} from '../../../test-utils/testing-library-utils'

describe('render',()=>{
    test('renders subreddit through props',()=>{
        const props = { id: 1, name: 'Popular', handleOnClick: null}
        render(<SubReddit {...props}/>)
        const subReddit = screen.getByText(/popular/i)
        expect(subReddit).toBeInTheDocument()
    })
})

