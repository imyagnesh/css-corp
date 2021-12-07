import React from 'react';
import ReactDOM from 'react-dom';

const FuncApp = ({ firstName, lastName }) => {
  return (
    <>
      <h1 >{firstName}</h1>
      <h2 >{lastName}</h2>
    </>
  );
};

export default FuncApp