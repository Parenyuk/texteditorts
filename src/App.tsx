import React, {FormEvent, useState} from 'react';
import './App.css';
import {Content} from './components/Content';


function App() {

    const [text, setText] = useState('');

    const [color, setColor] = useState('black');



  return (
      <div className="App">
        <h1>Text Editor with React Hooks</h1>
          <Content text={text} setText={setText} />


      </div>
  );
}

export default App;
