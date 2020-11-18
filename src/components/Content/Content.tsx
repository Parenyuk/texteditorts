import React, {useState} from 'react';
import './Content.css'
import {ChangeTextProperties} from './ChangeTextProperties/ChangeTextProterties';


export const Content = () => {


    const [onj, setOnj] = useState({
        text: '',
        fontSize: '',
        color: '',
        backgroundColor: ''
    })


    const formatText = (sCnd: string, value: string): void => {
        document.execCommand(sCnd, false, value)
        document.execCommand('copy')
        navigator.clipboard.readText().then(text => {

            switch (sCnd) {
                case 'fontSize' :  {
                    let newObj = {...onj, fontSize: value, text}
                    setOnj(newObj)
                    break
                }

                case 'foreColor' :  {
                    let newObj = {...onj, color: value, text }
                    setOnj(newObj)
                    break
                }

            }




        })
    }

    const toJSON = () => {
        const json = JSON.stringify(onj)
        console.log(json)
    }

    // const formatText = (sCnd: string, {fontSize, color, bgColor}:any): void => {
    //
    //
    //
    //     document.execCommand(sCnd, false, value)
    //     document.execCommand('copy')
    //     navigator.clipboard.readText().then(text => {
    //
    //         type aType={
    //             text: string,
    //             fontSize?:string
    //             color?: string,
    //             backgroundColor?: string
    //         }
    //
    //
    //         let a:aType={
    //             text: text,
    //         }
    //
    //         if (fontSize) a['fontSize'] = fontSize
    //         if (color) a['color'] = color
    //         if (bgColor) a['backgroundColor'] = bgColor
    //         // const newObj = {
    //         //     text: text,
    //         //     fontSize: value,
    //         //     color: value,
    //         //     backgroundColor: value
    //         // }
    //
    //
    //         console.log(a)
    //
    //     })
    // }





    // const formatText = (sCnd: string, {...values}: any ): void => {

    //     const formatText = (sCnd: string, {fontSize, color, bgColor}: any ): void => {
    //
    //
    //     document.execCommand(sCnd, false, values)
    //     document.execCommand('copy')
    //     navigator.clipboard.readText().then(text => {
    //         const newObj = {
    //             text: text,
    //             fontSize: values,
    //             color: values,
    //             backgroundColor: values
    //         }
    //
    //
    //         console.log(newObj)
    //
    //     })
    //
    //
    // }


    //second variant: now do not work right
    // const formatFontSize = (sCnd: string, fontSize: string) => {
    //         document.execCommand(sCnd, false, fontSize)
    //         console.log(fontSize)
    //     return formatText(fontSize, null, null)
    //     // return fontSize
    // }
    // const formatColor = (sCnd: string, color: string) => {
    //     document.execCommand(sCnd, false, color)
    //     return formatText(null, color, null)
    //     // return color
    // }
    //
    // const formatBackground = (sCnd: string, bgColor: string) => {
    //     document.execCommand(sCnd, false, bgColor)
    //     return formatText(null, null, bgColor)
    //     return bgColor
    // }

    // const formatText = (fontSize: string | null, color: string | null, bgColor: string | null): void =>  {
    //     document.execCommand('copy')
    //     navigator.clipboard.readText().then(text => {
    //         const newObj = {
    //             text: text,
    //             fontSize: fontSize,
    //             color: color,
    //             backgroundColor: bgColor
    //         }
    //
    //
    //         console.log(newObj)
    //
    //     })


    // }


    return (

        <>
            <ChangeTextProperties  toJSON={toJSON} /*formatFontSize={formatFontSize} formatColor={formatColor} formatBackground={formatBackground}*/
                formatText={formatText}/>
            <div contentEditable={'true'}
                 className={'textarea'}>
            </div>

        </>

    )
}
