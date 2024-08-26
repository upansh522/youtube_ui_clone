import React from "react";
import ReactDOM from 'react-dom';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Screen from "./Screen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Header />
            <Screen />
          </>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
