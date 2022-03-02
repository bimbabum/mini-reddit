import Menu from "./Menu";
import {render, screen, fireEvent} from '../../test-utils/testing-library-utils'

test('renders Sub button',()=>{
    render(<Menu/>)
    const subReddits = screen.getByRole('button', {name:/sub/i})
    expect(subReddits).toBeInTheDocument()
})

test('renders SubReddits when clicking Sub button', ()=>{
    render(<Menu/>)
    const menu = screen.getByRole('button', {name:/sub/i})
    fireEvent.click(menu)
    const subReddits = screen.getAllByRole('link')
    expect(subReddits.length).toBe(20)
})