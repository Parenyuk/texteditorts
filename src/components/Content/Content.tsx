import React, {useState} from 'react';
import './Content.css'
import {ChangeTextProperties} from './ChangeTextProperties/ChangeTextProterties';


export const Content = () => {


    const [onj, setOnj] = useState({
        text: '',
        fontSize: '10px',
        color: '',
        backgroundColor: 'black'
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
                case 'backColor' :  {
                    let newObj = {...onj, backgroundColor: value, text }
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



    return (

        <>
            <ChangeTextProperties  toJSON={toJSON}
                formatText={formatText}/>
            <div contentEditable={'true'}
                 className={'textarea'}>
            </div>

        </>

    )
}
