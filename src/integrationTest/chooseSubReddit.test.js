import App from '../app/App'
import {render, screen, fireEvent} from '../test-utils/testing-library-utils'

test('renders `Popular` posts on 1st mount', async ()=>{
    render(<App/>)
    
    //should render two posts setup in handlers.js
    const title1 = await screen.findByText(/What movie do you HAVE to finish watching anytime you stumble across it while channel surfing?/i)
    expect(title1).toBeInTheDocument()

    const title2 = screen.getByText(/ham sniffer/i)
    expect(title2).toBeInTheDocument()
})

test('renders `AskReddit` posts when clicking the said subreddit', async ()=>{
    render(<App/>)

    //choosing AskReddit
    const askReddit = screen.getByRole('link', {name: /askreddit/i})
    fireEvent.click(askReddit)

    //shoudl render related posts setup in handlers.js
    const title1 = await screen.findByRole('heading', { name: /What's something you find weird that is 100% normal?/i})
    expect(title1).toBeInTheDocument()

    const title2 = screen.getByRole('heading', { name: /What's more fucked up than people think?/i})
    expect(title2).toBeInTheDocument()
})