import styled from 'styled-components'
import MarkDown from 'markdown-to-jsx'
import React from 'react'

const SelfTextContainer = styled.div`
    max-height: ${props => props.show? 'none' : '250px'};
    overflow: hidden;
    text-align: left;
    mask-image: ${props => props.show ? 'none' : 'linear-gradient(180deg,#000 60%,transparent)'};
    cursor: pointer;
    padding-buttom: 0.5rem;
    padding-left: 0.5rem;
`
const MediaContainer = styled.div`
    max-height: 500px;
    width: 100%;
    text-align: center;
    overflow: hidden;
    height: ${props => props.vertical? '500px' : 'none'};
    padding-buttom: 0.5rem;
`

const Image = styled.img`
    height: ${props => props.vertical ? '100%' : 'auto'};
    width: ${props => props.vertical? 'auto' : '100%'};
`

const Video = styled.video`
    height: ${props => props.vertical ? '100%' : 'auto'};
    width: ${props => props.vertical ? 'auto' : '100%'};
`
const LinkContainer = styled.div`
    text-align: left;
    width: 100%;
    padding-buttom: 0.5rem;
`

const LinkImage = styled.img`
    border: 3px solid pink;
    width: auto;
    border-radius: 10px
`

export default function Media({post}){
    const hint = post.post_hint
    if (hint === 'sef' || post.selftext) {
        return <SelfText text={post.self || post.selftext} />
    }  else if (hint === 'image') {
        return <ImagePost url={post.url_overridden_by_dest} />
    } else if (hint === 'hosted:video') {
        return <VideoPost url={post.media.reddit_video.fallback_url}/>
    } else if (hint === 'link') {
        return <LinkPost url={post.url} thumbnail={post.thumbnail}/>
    }
    else {
        return null
    }
}

function SelfText({text}) {
    const [showText, setShowText] = React.useState(false)
    const len = text.length
    if (len > 400 ) {
        return (
            <SelfTextContainer
                show={showText}
                onClick={() => setShowText(show => !show)}
            >
                <MarkDown>{text}</MarkDown>
            </SelfTextContainer>
        )
    }
    return (
        <SelfTextContainer show>
            <MarkDown>{text}</MarkDown>
        </SelfTextContainer>
    )
}

function ImagePost({url}) {
    const [vertical, setVertical] = React.useState(true)
    const handleOnLoad = (e) => {
        const height = e.target.height
        const width = e.target.width
        if (height >= width) {
            setVertical(true)
        } else {
            setVertical(false)
        }
    }
    return (
        <MediaContainer vertical={vertical}>
            <Image 
                src={url} alt='' 
                onLoad={(e) => handleOnLoad(e)} 
                vertical={vertical} 
            />
        </MediaContainer>
    )
}

function VideoPost({url}) {
    const [vertical, setVertical] = React.useState()
    const handleOnLoad = (e) => {
        const height = e.target.videoHeight
        const width = e.target.videoWidth
        if (height > width) {
            setVertical(true)
        } else {
            setVertical(false)
        }
    }
    console.log(url)
    return (
        <MediaContainer vertical={vertical}>
            <Video controls autoPlay muted onLoadedMetadata={(e) => handleOnLoad(e)} vertical={vertical}>
                <source src={url} type='video/mp4' />
                Video not supported
            </Video>
        </MediaContainer>
    )
}

function LinkPost({url, thumbnail}) {
    return(
        <LinkContainer>
            <a href={url} target='_blank' rel="noreferrer"><LinkImage src={thumbnail} alt='' /></a>
        </LinkContainer>
    )
}