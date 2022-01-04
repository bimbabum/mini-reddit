import Media from "../Media";
import {render, screen} from '../../../test-utils/testing-library-utils'

const post = {
    imagePost: {
        post_hint: 'image',
        url_overridden_by_dest: ''
    },
    selfPost: {
        post_hint: 'self',
        selftext: 'a self text post'  
    },
    videoPost: {
        post_hint: 'hosted:video',
        media: {reddit_video: {fallback_url: ''}}
    },
    linkPost: {
        post_hint: 'link',
        url: '',
        thumbnail: ''
    }
}


test('displays image post', ()=>{
   render(<Media post={post.imagePost}/>)
   const image = screen.getByRole('img')
   expect(image).toBeInTheDocument()
})

test('displays selfText', ()=>{
    render(<Media post={post.selfPost}/>)
    const selfText = screen.getByText('a self text post')
    expect(selfText).toBeInTheDocument()
})

test.skip('displays video', ()=>{
    render(<Media post={post.videoPost}/>)
    const video = screen.getByRole('video')
    expect(video).toBeInTheDocument()
})

test('displays link', ()=>{
    render(<Media post={post.linkPost}/>)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
})