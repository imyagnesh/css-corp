import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Userinfo from './Userinfo';


ReactDOM.render(
  <div>
    <h1>Hello from React</h1>
    <input type="checkbox" />
    <App title="Good Morning" />
    <Userinfo firstName="CSS" lastName="Corp"/>
  </div>,
  document.getElementById('root'),
);