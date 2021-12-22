import SearchBar from "./search/SearchBar";
import {render, screen} from '@testing-library/react'

test('render search icon and search input',()=>{
    render(<SearchBar/>)
    const searchIcon = screen.getByRole('img',{name: /search icon/i})
    expect(searchIcon).toBeInTheDocument()

    const searchInput = screen.getByRole('textbox')
    expect(searchInput).toBeInTheDocument()
})