import React from 'react';
import './ChangeTextProperties.css'

type PropsType = {
    formatText(f: string, value: string): void
    toJSON: () => void
}
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

const bgColorArray = [
    'background color', 'red', 'green', 'yellow', 'blue', 'black', 'brown', 'greenyellow', 'pink'
]

export const ChangeTextProperties = ({ formatText, toJSON}: PropsType) => {
    return (
        <>
            <div className={'selectFields'}>
                <select className={'selectItems'}
                        onChange={(e) => formatText('fontSize', e.currentTarget[+e.currentTarget.value].innerHTML)}>
                    font size
                    {fontSizeArray.map(f => <option key={f.key} value={f.key}>{f.value}</option>)}
                </select>
                <select className={'selectItems'}
                        onChange={(e) => formatText('foreColor', e.currentTarget.value)}> color
                    {colorArray.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select className={'selectItems'} onChange={(e) => formatText('backColor', e.currentTarget.value)}>
                    background color
                    {bgColorArray.map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <button onClick={toJSON} className={'buttonToJSON'}>Convert to JSON</button>
            </div>
        </>
    )
};

