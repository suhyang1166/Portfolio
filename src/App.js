import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import About from "./page/About";
import Project from "./page/Project";
import Contact from "./page/Contact";
import Header from "./components/Header";
import Contents from "./page/Contents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contents" element={<Contents />} />
      </Routes>
    </>
  );
}

export default App;
