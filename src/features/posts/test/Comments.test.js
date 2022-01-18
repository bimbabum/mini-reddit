import Comments, { Comment} from "../Comments";
import {render, screen} from '../../../test-utils/testing-library-utils'

describe('Comment', ()=>{
    test('renders comment text', () => {
        render(<Comment comment='this is a comment' />)
        const comment = screen.getByText('this is a comment')
        expect(comment).toBeInTheDocument()
    })
})

describe('Comments', ()=>{
    test('renders 3 comments', ()=>{
        const comments = [{ body: 'comment1' }, { body: 'comment2' }, { body: 'comment3' }]
        render(<Comments comments={comments} />)
        const comment1 = screen.getByText('comment1')
        expect(comment1).toBeInTheDocument()
    })
})