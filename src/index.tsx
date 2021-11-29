import * as React from 'react';
import Cursor from './Cursor';

interface TypingInterface{
    children?:string,
    typingSpeed?:string
    blinker?:JSX.Element,
    blinkerTimeLapse?:string,
    onFinish?:Function
    className?:string,
    style?:React.CSSProperties
    styleText?:React.CSSProperties
    styleBlinker?:React.CSSProperties
}

export default function Typing({
    typingSpeed = '100',
    blinkerTimeLapse = '1',
    children = 'Default text',
    className,
    style,
    onFinish,
    blinker,
    styleText,
    styleBlinker,
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
            {blinker || <Cursor timeLapse={blinkerTimeLapse} style={styleBlinker}/>}
        </span>
    );
};