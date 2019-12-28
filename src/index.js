import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './componentes/PrimeiroComponente';

const elemento = document.getElementById('root');

ReactDOM.render(
  <div>
    <PrimeiroComponente />
    <PrimeiroComponente />
    <PrimeiroComponente />
  </div>,
  elemento,
);
