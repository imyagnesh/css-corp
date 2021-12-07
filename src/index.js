import React from 'react';
import ReactDOM from 'react-dom';
import User from './user';

// ReactDOM.render (
//    <div>
//    <h1>Full Name is::</h1>
//    <User firstname="Lavanya" lastname="Ramanijni"/>
//    </div>,
//    document.getElementById('root')
// );

ReactDOM.render(
  <div>
    <h1>My First React work</h1>
    <User firstname="Lavanya" lastname="Ramanijni" />
  </div>,
  document.getElementById('root'),
);
