import MainHeader from "./mainHeader";
import {render, screen} from '../../test-utils/testing-library-utils'

test('renders selected subreddit info', ()=>{
    render(<MainHeader/>)
    const popularSub = screen.getByRole('heading',{name: "r/Popular"})
    expect(popularSub).toBeInTheDocument()
})

test('renders search result', ()=>{

})