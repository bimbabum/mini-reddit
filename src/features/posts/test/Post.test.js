import {render, screen} from '@testing-library/react'
import Post from '../Post'

describe('render',()=>{
    test('renders post title, author,...', ()=>{
        const post = { 
            title: 'A popular title', 
            author: 'bimbabum', 
            ups: 2872, 
            numComments: 367, 
            img: "https://i.redd.it/mg64pnnpa5781.png",
            link: '/r/pcmasterrace/comments/rmcyv0/christmas_giveaway_hello_pcmasterrace_in/'
        }
        render(<Post post={post}/>)
        
        const title = screen.getByRole('heading', {name: /a popular title/i})
        expect(title).toBeInTheDocument()

        const author = screen.getByText(/bimbabum/i)
        expect(author).toBeInTheDocument()

    })
})