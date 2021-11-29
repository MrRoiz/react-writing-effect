import * as React from 'react';
import Cursor from './Cursor';

interface TypingInterface{
    children?:string,
    typingSpeed?:string
    cursor?:JSX.Element,
    cursorTimeLapse?:string,
    onFinish?:Function
    className?:string,
    style?:React.CSSProperties
    styleText?:React.CSSProperties
    styleCursor?:React.CSSProperties
}

export default function Typing({
    typingSpeed = '100',
    cursorTimeLapse = '1',
    children = 'Default text',
    className,
    style,
    onFinish,
    cursor,
    styleText,
    styleCursor,
}:TypingInterface){
    
    const [textToShow, setTextToShow] = React.useState('')

    React.useEffect(()=>{
        const assignLetter = async()=>{
            setTimeout(()=>{
                setTextToShow(textToShow+children.charAt(textToShow.length))
            },parseInt(typingSpeed))
        }

        if(children !== textToShow) assignLetter()
        else if(onFinish) onFinish()
    },[textToShow])
    
    return (
        <span className={className} style={style}>
            <span style={styleText}>{textToShow}</span>
            {cursor || <Cursor timeLapse={cursorTimeLapse} style={styleCursor}/>}
        </span>
    );
};