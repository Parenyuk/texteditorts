import React from 'react';
import './Content.css'


export const Content = () => {




    const formatText = (sCnd: string, value: string): void => {
        document.execCommand(sCnd, false, value)
        document.execCommand('copy')
        navigator.clipboard.readText().then(text => {
            const newObj = {
                text: text,
                fontSize: value,
                color: value,
                backgroundColor: value
            }


            // console.log(newObj)

        })


    }

    // const toJSON = (newObj: any) => {
    //     const json = JSON.stringify(newObj)
    //     console.log(json)
    // }

    const fontSizeArray = [
        {key: 0, value: 'font size'}, {key: 1, value: '10px'}, {key: 2, value: '12px'}, {
            key: 3,
            value: '14px'
        }, {key: 4, value: '18px'},
        {key: 5, value: '24px'}, {key: 6, value: '36px'}, {key: 7, value: '48px'},

    ]
    const colorArray = [
        'color', 'red', 'green', 'yellow', 'blue', 'black', 'brown', 'greenyellow', 'pink'
    ]

    return (

        <>
            <form className={'form'}>
                <select className={'selectItems'} onChange={(e) => formatText('fontSize', e.currentTarget.value)}>
                    font size
                    {fontSizeArray.map(f => <option key={f.key} value={f.key}>{f.value}</option>)}
                </select>
                <select className={'selectItems'}
                        onChange={(e) => formatText('foreColor', e.currentTarget.value)}> color
                    {colorArray.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select className={'selectItems'} onChange={(e) => formatText('backColor', e.currentTarget.value)}>
                    background color
                    {colorArray.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <button /*onClick={toJSON}*/ >Convert to JSON</button>
            </form>
            <div contentEditable={'true'}
                 className={'textarea'}>
            </div>

        </>

    )
}
