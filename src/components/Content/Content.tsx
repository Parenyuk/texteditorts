import React, {useState} from 'react';
import './Content.css'
import {ChangeTextProperties} from './ChangeTextProperties/ChangeTextProterties';


export const Content = () => {


    const [obj, setObj] = useState({
        text: '',
        fontSize: '10px',
        color: 'black',
        backgroundColor: 'black'
    })


    const formatText = (sCnd: string, value: string): void => {



        document.execCommand(sCnd, false, value)
        document.execCommand('copy');
                navigator.clipboard.readText().then(text => {
            switch (sCnd) {
                case 'fontSize': { 
                    let newObj = {...obj, fontSize: value, text}
                    setObj(newObj)
                    break
                }

                case 'foreColor': {
                    let newObj = {...obj, color: value, text}
                    setObj(newObj)
                    break
                }
                case 'backColor': {
                    let newObj = {...obj, backgroundColor: value, text}
                    setObj(newObj)
                    break
                }
            }
        })
    }

    const toJSON = () => {
        const json = JSON.stringify(obj)
        console.log(json)
    }

    return (

        <>
            <ChangeTextProperties toJSON={toJSON} formatText={formatText}/>
            <div contentEditable={'true'}
                 className={'textarea'}>
            </div>

        </>
    )
}
