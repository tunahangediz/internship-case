import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage";

function RoutesHandler() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/:username" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesHandler;
