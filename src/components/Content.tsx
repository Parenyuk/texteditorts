import React, {useRef} from 'react';
type PropsType = {
    text: string
    setText: (t: string) => void
}

export const Content = ({ text, setText}: PropsType) => {

    const changeText = (e: React.ChangeEvent<HTMLInputElement>):  void => {
        setText(e.target.value);

    }

    const



    const changeBackground = () => {

    }

    const toJSON = () => {
        text
    }

    return (

        <>
        <div contentEditable={'true'} style={{marginLeft: '100px',
            minHeight: '500px', maxWidth: '1000px', outline: '0px solid transparent',
            border: '0.5px solid #C6C6C6',
            padding: '10px',
            backgroundColor: 'white'}} > {text}
        </div>
            <div>
                <button onChange={changeBackground}  >Change color</button>
                <button>Change font-size</button>
                <button>Change background</button>
                <button onClick={toJSON}>To JSON-FORMAT</button>
            </div>
            </>






    )
}
