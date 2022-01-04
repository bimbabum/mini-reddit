import App from '../app/App'
import {render, screen, waitFor} from '../test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'

test.skip('search result for `best halloween custom`', async()=>{
    render(<App/>)   
    const defaultTitle = await screen.findByRole('heading', { name: /ham sniffer/i})
    expect(defaultTitle).toBeInTheDocument()

    const searchBar = screen.getByRole('textbox')
    userEvent.clear(searchBar)
    userEvent.type(searchBar,'best halloween custom{enter}')

    const loading = await screen.findByRole('img',{name: /loading.../i})
    expect(loading).toBeInTheDocument()
    await waitFor(()=>{
        const postTitle = screen.getByRole('heading', { name: /Best customer to date! She let me pick out whatever halloween candy I wanted …/i })
        expect(postTitle).toBeInTheDocument()
    })
    
})