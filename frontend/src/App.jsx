import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./component/home";
import Contact from "./pages/contact";
import Programs from "./pages/program";
import GetInvolved from "./pages/involved"
import About from "./pages/about";
import Campain from "./pages/campain";
export default function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/campaigns" element={<Campain />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
