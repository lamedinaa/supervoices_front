import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import {Helmet} from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>

  </React.StrictMode>,
document.getElementById('header')
)
