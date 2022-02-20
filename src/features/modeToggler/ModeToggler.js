import styled from "styled-components"
import { useDispatch, useSelector} from "react-redux"
import {toggleMode} from './modeSlice'

const Toggler = styled.button`
    background-color: ${({theme})=> theme.backgroundColor};
    border: none;
    margin-right: 1rem;
    height: 100%;
    display: flex;
    align-items: center;
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
                src={mode === 'light'? theme.dark:theme.light} 
                onClick={() => dispatch(toggleMode())}/>
        </Toggler>
    )
}