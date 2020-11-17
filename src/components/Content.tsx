import React, {ChangeEvent,  useRef,} from 'react';
import  './Content.css'

type PropsType = {
    text: string
    change: (t: string) => void
}

export const Content = ({change, text}: PropsType) => {

    const textRef = useRef(null)




    const changeText2 = (comand: string, e: React.ChangeEvent<HTMLInputElement>): void => {
        debugger
        change(e.target.value);
        console.log(text)
    }

    const toJSON = () => {
        const json = JSON.stringify(text)
        debugger
        console.log(json)
    }

    const formatText = (sCnd: string, value:string): void => {
         document.execCommand(sCnd, false, value)

        document.execCommand('copy')
        navigator.clipboard.readText().then(text=> {
            const newObj = {
                text: text,
                fontSize: value,
                color: 'red'
            }

            debugger
        })

    }

    //execCommand(String aCommandName, Boolean aShowDefaultUI, String aValueArgument)

    // const changeFontSize = (e: ChangeEvent<HTMLSelectElement>): void => {
    //     console.log(e.currentTarget.value)
    // }
    //
    // const changeColor = (e: ChangeEvent<HTMLSelectElement>): void => {
    //     console.log(e.currentTarget.value)
    // }
    //
    // const changeBackground = (e: ChangeEvent<HTMLSelectElement>): void => {
    //     console.log(e.currentTarget.value)
    // }

    const fontSizeArray = [
        "8px", "10px", "12px", "14px", "16px", "18px", "20px"
    ]

    return (

        <>
            <form onSubmit={toJSON} className={'form'}>
                <select onChange={(e) =>formatText('fontSize', e.currentTarget.value)}>
                    font size
                    {fontSizeArray.map(f =>  <option key={f} value={f}>{f}</option>)}
                </select >
                {/*<select onChange={formatText}>*/}
                {/*    <option value="red">red</option>*/}
                {/*    <option value="green">green</option>*/}
                {/*    <option value="yellow">yellow</option>*/}
                {/*    <option value="blue">blue</option>*/}
                {/*    <option value="black">black</option>*/}
                {/*    <option value="greenyellow">greenyellow</option>*/}
                {/*    <option value="pink">pink</option>*/}
                {/*</select>*/}
                {/*<select onChange={formatText}>*/}
                {/*    <option value="red">red</option>*/}
                {/*    <option value="green">green</option>*/}
                {/*    <option value="yellow">yellow</option>*/}
                {/*    <option value="blue">blue</option>*/}
                {/*    <option value="black">black</option>*/}
                {/*    <option value="greenyellow">greenyellow</option>*/}
                {/*    <option value="pink">pink</option>*/}
                {/*</select>*/}
            </form>

            <div contentEditable={'true'} style={{
                marginLeft: '100px',
                minHeight: '500px', maxWidth: '1000px', outline: '0px solid transparent',
                border: '0.5px solid #C6C6C6',
                padding: '10px',
                backgroundColor: 'white'
            }}
                // onClick={changeText2}
                //  onChange={changeText2}
                ref={textRef}
            > {text}
            </div>
            <div>
                <button onClick={toJSON} /*onChange={changeText}*/>To JSON-FORMAT</button>
            </div>
        </>

    )
}
