import { render, screen, waitForElementToBeRemoved} from '../../../test-utils/testing-library-utils'
import Post from '../Post'
import userEvent from '@testing-library/user-event' 

describe('render',()=>{
    test('renders post title, author,...', ()=>{
        const post = { 
            title: 'A popular title', 
            author: 'bimbabum', 
            ups: 2872, 
            numComments: 367, 
            img: "https://i.redd.it/mg64pnnpa5781.png",
            link: '/r/pcmasterrace/comments/rmcyv0/christmas_giveaway_hello_pcmasterrace_in/',
            permalink: '/r/testComments/'
        }
        render(<Post post={post}/>)
        
        const title = screen.getByRole('heading', {name: /a popular title/i})
        expect(title).toBeInTheDocument()

        const author = screen.getByText(/bimbabum/i)
        expect(author).toBeInTheDocument()

    })
})

describe('comments', ()=>{
    // beforeEach(()=>{
    //     jest.useFakeTimers()
        
    // })
    // afterEach(()=>{
    //     jest.useRealTimers()
    // })
    test('renders comments', async()=>{
        const post = {
            title: 'A popular title',
            author: 'bimbabum',
            ups: 2872,
            numComments: 367,
            img: "https://i.redd.it/mg64pnnpa5781.png",
            link: '/r/pcmasterrace/comments/rmcyv0/christmas_giveaway_hello_pcmasterrace_in/',
            permalink: '/r/testComments/',
            num_comments: '20'
        }
        render(<Post post={post} />)
        const commentButton = screen.getByRole('button', {name: `comments: ${post.num_comments-1}`})
        userEvent.click(commentButton)
        const loading = await screen.findByRole('img', {name: 'loading...'})
        expect(loading).toBeInTheDocument()
        jest.setTimeout(async() => {
            await waitForElementToBeRemoved(loading).then(async () => {
                const comment2 = await screen.findByText('comment 2')
                expect(comment2).toBeInTheDocument()
            })
         }, 50000)
    })
})