import React, {FormEvent, useState} from 'react';
import './App.css';
import {Content} from './components/Content';

type stateType = {
    text: string
    fontSize: string
    color: string
}

function App() {

    // const [value, setValue] = useState<stateType>({text: '',
    // fontSize: '14px',
    //     color: 'black'
    // });

    const [text, setText] = useState('');

    const change = (st: string = '') => {
        setText(st)
        console.log(text)
    }

  return (
      <div className="App">
        <h1>Text Editor with React Hooks</h1>
          <Content change={change} text={text} />
      </div>
  );
}

export default App;
