import Comments, { Comment} from "../Comments";
import {render, screen, fireEvent} from '../../../test-utils/testing-library-utils'

describe('Comment', ()=>{
    test('renders comment text', () => {
        render(<Comment comment={{body: 'this is a comment'}} />)
        const comment = screen.getByText('this is a comment')
        expect(comment).toBeInTheDocument()
    })
    test('renders replies when click the + button', async()=>{
        render(<Comment comment={{ body: 'this is a comment', replies: { data: { children: [{ data: { body: 'reply 1' } }, { data: { body: 'reply 2' } }]}}}}/>)
        const button = screen.getByRole('button', {name: '+'})
        fireEvent.click(button)
        expect(await screen.findByText('reply 1')).toBeInTheDocument()
        expect(await screen.findByText('reply 2')).toBeInTheDocument()
    })
})

describe('Comments', ()=>{
    test('renders 3 comments', ()=>{
        const comments = [{ body: 'comment1' }, { body: 'comment2' }, { body: 'comment3' },]
        render(<Comments comments={comments} showComments={true}/>)
        expect(screen.getByText('comment1')).toBeInTheDocument()
        expect(screen.getByText('comment2')).toBeInTheDocument()
        expect(screen.getByText('comment3')).toBeInTheDocument()
    })
})