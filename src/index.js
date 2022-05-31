import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TimeProvider } from './Context/time-context';
import { TaskProvider } from './Context/TaskContext';

ReactDOM.render(
  <React.StrictMode>
    <TimeProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </TimeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
