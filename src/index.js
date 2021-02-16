import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"; // react官方路由库

import { Provider } from "react-redux"; // redux配置

import reportWebVitals from "./reportWebVitals"; // 脚手架自带

import App from "./App.jsx";
import store from "./redux/store"; // redux的store部分，全局获取

ReactDOM.render(
  <React.StrictMode>
    {/* 配置总状态 */}
    <Provider store={store}>
      {/* 配置总路由 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
