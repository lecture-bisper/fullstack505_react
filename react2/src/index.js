import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import App6 from "./App6";
import App07 from "./App07";
import App08 from "./App08";
import App09 from "./App09";
import App10 from "./App10";
import App11 from "./App11";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<App2 />*/}
    {/*<App3 />*/}
    {/*<App4 />*/}
    {/*<App5 />*/}
    {/*<App6 />*/}
    {/*<App07 />*/}
    {/*<App08 />*/}
    {/*<App09 theme={'primary'} signedInUser={'아이유'} />*/}
    {/*<App10 theme={'success'} signedInUser={'아이유'} />*/}
    <App11 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
