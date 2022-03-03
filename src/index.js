import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store2 from "./store/store2";
import { createGlobalStyle } from "styled-components";

// import DataProvider from "./redux/StoreT";

const GlobalStyle = createGlobalStyle`

position: relative;
 
 

* {
  font-family: "Pretendard";
  font-weight: bold;
}
a {
  text-decoration-line: none;
}
h2 {
  font-size: 30px;
  font-weight: bold;
}

`;

ReactDOM.render(
  <Provider store={store2}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("urlseries")
);
