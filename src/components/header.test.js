import Header from "./Header";
import { render, screen } from '../test-utils/testing-library-utils';

describe('render', ()=>{
    test('renders logo & `mini reddit`', () => {
        render(<Header />)
        const logo = screen.getByRole('img', { name: /reddit icon/i })
        expect(logo).toBeInTheDocument()

        const miniReddit = screen.getByText('mini reddit')
        expect(miniReddit).toBeInTheDocument()
    })
})

