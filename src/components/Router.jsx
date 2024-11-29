


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
//import Login from "./LandingPage";
import LandingPage from "./LandingPage";
import NotValidUser from "./NotValidUser";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/userID/:spiritPet" element={<App />} />
      <Route path="*" element={<NotValidUser />} />
    </Routes>
  </BrowserRouter>
);

export default Router;