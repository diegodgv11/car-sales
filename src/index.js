import React from 'react';
import ReactDOM from 'react-dom';
import 'sanitize.css';
import './index.css';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);