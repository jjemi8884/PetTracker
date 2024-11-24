import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import NotValidUser from "./NotValidUser";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/userID/:loginID" element={<App />} />
      <Route path="*" element={<NotValidUser />} />
    </Routes>
  </BrowserRouter>
);

export default Router;