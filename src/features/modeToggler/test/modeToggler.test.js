import ModeToggler from '../ModeToggler'
import {render, screen} from '../../../test-utils/testing-library-utils'

test('renders mode button',()=>{
    render(<ModeToggler/>)
    const modeButton = screen.getByRole('button', {name: /mode toggler/i})
    expect(modeButton).toBeInTheDocument()
})
