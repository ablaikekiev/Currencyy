import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app';
import {Provider} from "react-redux";
import store from "./redux";
import './index.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
            <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);