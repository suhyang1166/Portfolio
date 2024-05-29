import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Contents from "./page/Contents";
import NotFound from "./page/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contents" element={<Contents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
