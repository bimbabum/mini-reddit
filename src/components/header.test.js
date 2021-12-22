import Header from "./Header";
import { render, screen } from '@testing-library/react';

test.skip('renders logo & `mini reddit',()=>{
    render(<Header/>)
    const logo  = screen.getByRole('img', {name: /reddit logo/i})
    expect(logo).toBeInTheDocument()
})
test('renders search bar', ()=>{

})