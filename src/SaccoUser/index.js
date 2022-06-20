import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import Login from "./Routes/Login";
import Register from './Routes/Register';


export default function SaccoUser() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}