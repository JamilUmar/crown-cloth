import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SigninSignup from "./pages/sign-in-sign-up/SigninSignup";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/signin" element={<SigninSignup />} />
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
};

export default App;
