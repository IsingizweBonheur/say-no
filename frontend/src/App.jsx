import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./component/home";
export default function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}