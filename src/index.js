import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import App from "../src/App";
import store from "src/redux/store";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
