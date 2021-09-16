import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* Aqui habilitamos o uso do bootstrap depois de termos executado
     yarn add bootstrap 
  no comando de getLineAndCharacterOfPosition-->
*/
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.css'

import { getLineAndCharacterOfPosition } from 'typescript';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

