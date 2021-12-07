import React from 'react';
import ReactDOM from 'react-dom';
import ClassApp from './ClassApp';
import FuncApp from './FuncApp';

ReactDOM.render(
    <div>
      <h1>Hello from React</h1>
      <ClassApp firstName="Zabi" lastName="Ullah" />
      <FuncApp firstName="Yagnesh" lastName="Modh" />
    </div>,
    document.getElementById('root'),
  );