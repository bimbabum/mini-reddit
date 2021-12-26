import Posts from '../Posts'
import {render, screen} from '../../../test-utils/testing-library-utils'
import {rest} from 'msw'
import {server} from '../../../mocks/server'

describe('while fetching data', ()=>{
    test('renders loading', ()=>{
        render(<Posts/>)
        const loading = screen.getByText(/loading.../i)
        expect(loading).toBeInTheDocument()
    })
})

describe('while succefully fetching data', ()=>{
    test('renders posts', async()=>{
       render(<Posts/>)
        const postHeader = await screen.findByRole('heading', { name: /ham sniffer/i})
        expect(postHeader).toBeInTheDocument()
    })
})

describe('while fetching returns error',()=>{
    test('renders error message', async()=>{
        server.resetHandlers(
            rest.get('https://www.reddit.com/r/popular.json', (req,res,ctx)=>{
                return res(ctx.status(500))
            })
        )
        render(<Posts/>)
        const errorMessage = await screen.findByRole('alert')
        expect(errorMessage).toBeInTheDocument()
    })
})
