import React from "react";
import ReactDOM from "react-dom";
import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById('root'));
