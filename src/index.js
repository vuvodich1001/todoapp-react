import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './store';
import './assets/css/index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <React.StrictMode>
      <Route>
        <App />
      </Route>
    </React.StrictMode>
  </StoreProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
