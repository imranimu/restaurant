import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./stores";
ReactDOM.render(

    <Provider store={store}>

        <App />
        
    </Provider>,

    document.getElementById("root")
);
