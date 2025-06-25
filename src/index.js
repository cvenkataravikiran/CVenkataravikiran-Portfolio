import React from 'react';
import ReactDOM from 'react-dom/client';

// THIS LINE IS CRUCIAL - IT LOADS ALL YOUR CUSTOM STYLES
import './index.css'; 

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();