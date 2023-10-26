import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { inject } from '@vercel/analytics';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
inject();
