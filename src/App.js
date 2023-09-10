import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/Header';
import SigninSignup from './pages/sign-in-sign-up/SigninSignup';

import { auth } from './firebase/firebase.utils';

import './App.css';

// Ss

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/signin" element={<SigninSignup />} />
        </Routes>
        {/* <HomePage /> */}
      </div>
    );
  }
}

export default App;
