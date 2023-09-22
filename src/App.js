import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SigninSignup from "./pages/sign-in-sign-up/SigninSignup";

import {
  auth,
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./firebase/firebase.utils";

import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

// Ss

const App = () => {
  // const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser({ currentUser: user });
      console.log(currentUser);
      // dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <Header currentUser={currentUser} />
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
