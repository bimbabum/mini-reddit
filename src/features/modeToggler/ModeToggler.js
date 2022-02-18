import styled from "styled-components"
import { useDispatch, useSelector} from "react-redux"
import {toggleMode} from './modeSlice'

const Toggler = styled.button`
    background-color: white;
    border: none;
    margin-right: 1rem;
    height: 100%;
    display: flex;
`

const ImageContainer = styled.img`
    height: 2.5rem;
`
const theme = {
    light: './img/light_mode.png',
    dark: './img/dark_mode.png'
}

export default function ModeToggler(){
    const dispatch = useDispatch()
    const mode = useSelector(state => state.mode)

    return (
        <Toggler>
            <ImageContainer
                alt='mode toggler' 
                src={mode === 'light'? theme.light:theme.dark} 
                onClick={() => dispatch(toggleMode())}/>
        </Toggler>
    )
}