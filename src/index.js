import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from "react-redux";
import store from "./Store/index"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);