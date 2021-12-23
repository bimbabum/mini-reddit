import SearchBar from "./SearchBar";
import {render, screen} from '../../test-utils/testing-library-utils'

test('render search icon and search input',()=>{
    render(<SearchBar/>)
    const searchIcon = screen.getByRole('img',{name: /search icon/i})
    expect(searchIcon).toBeInTheDocument()

    const searchInput = screen.getByRole('textbox')
    expect(searchInput).toBeInTheDocument()
})