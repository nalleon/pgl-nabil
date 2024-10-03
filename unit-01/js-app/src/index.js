import React from 'react';
import ReactDOM from 'react-dom';
//import ComponenteApp from './ComponenteApp.js';
import Practice05 from './Practice05.tsx';

const divRoot = document.getElementById("root");
ReactDOM.render(
  //<React.StrictMode>
    <Practice05 num1={1} num2={2}/>, divRoot
  //</React.StrictMode>
);
