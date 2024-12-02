/**
 * Justin Jemison
 * 12/1/2024
 * 
 * The landing page that will accept a user ID form Getup and then link that ID 
 * to the rest of they tracker by using this router to do that!
 */


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
      <Route path="/userID/:loginInfo" element={<App />} />
      <Route path="*" element={<NotValidUser />} />
    </Routes>
  </BrowserRouter>
);

export default Router;