import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./asset/font/Font.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body {
    font-family: "G M";
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
  }
  ul,li {
    list-style: none
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
