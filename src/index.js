import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TimeProvider } from './Context/time-context';

ReactDOM.render(
  <React.StrictMode>
    <TimeProvider>
      <App />
    </TimeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
