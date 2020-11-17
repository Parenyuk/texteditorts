import React, {ChangeEvent, useEffect, useRef,} from 'react';
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

    // useEffect(()=> {
    //  function  formatText  (sCnd: string, value:string)  {
    //         document.execCommand(sCnd, false, value)
    //
    //         document.execCommand('copy')
    //         navigator.clipboard.readText().then(text=> {
    //             const newObj = {
    //                 text: text,
    //                 fontSize: value,
    //                 color: 'red'
    //             }
    //
    //             debugger
    //         })
    //     }
    // }, [])

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
        // "8px", "10px", "12px", "14px", "16px", "18px", "20px",
        1, 2, 3, 4, 5, 6, 7
    ]
    const colorArray = [
        "red", "green", "yellow", "blue", "black", "brown", "greenyellow", "pink"
    ]

    return (

        <>
            <form onSubmit={toJSON} className={'form'}>
                <select onChange={(e) =>formatText('fontSize', e.currentTarget.value)}>
                    font size
                    {fontSizeArray.map(f =>  <option key={f} value={f}>{f}</option>)}
                </select >
                <select onChange={(e) =>formatText('foreColor', e.currentTarget.value)}> color
                    {colorArray.map(c => <option key={c} value={c}>{c}</option>)}


                </select>
                <select onChange={(e) =>formatText('backColor', e.currentTarget.value)}>
                    background color
                    {colorArray.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
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
