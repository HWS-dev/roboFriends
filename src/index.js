import React from 'react';
import ReactDOM from 'react-dom/client'; //connects DOM to react
import './index.css'; //location of index.css './' means it's in the same directory
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';  // this is shorthand css package to make it easier to style page. Use 'className' on html tags


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  //render appies the below to 'root' div
//if no file extension, then assumes .js
//react.stricmode is an optional mode to call out errors
//App is main core component. 
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
