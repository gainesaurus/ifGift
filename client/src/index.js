import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-kbfkwj7pbiq6jz3v.us.auth0.com"
    clientId="8YUdyy8cG7rRjXhbAQh98HOH3dPRqomx"
    redirectUri='http://localhost:3000'
  >
    {/* <React.StrictMode> */}
      <App />
    {/* </React.StrictMode>, */}
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
