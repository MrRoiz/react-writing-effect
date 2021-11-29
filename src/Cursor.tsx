import * as React from 'react'
import styled, { keyframes } from 'styled-components'

interface CursorInterface{
    timeLapse?:string,
    style?:React.CSSProperties
}

const blinking = keyframes`
    50% {
        opacity: 0;
    }
`

const StyledCursor = styled.span<CursorInterface>`
    color : ${props => props.color};
    animation : ${blinking} ${props => props.timeLapse+'s'} linear infinite;
`

export default function Cursor({style, timeLapse ='1'}:CursorInterface){
    return <StyledCursor style={style} timeLapse={timeLapse}>|</StyledCursor>
}