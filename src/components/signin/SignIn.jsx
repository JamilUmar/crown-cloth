import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './Signin.css';

const SignIn = ({ isGoogleSignin }) => {
  const [login, setLogin] = useState({ email: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    setLogin({ email: '', password: '' });
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setLogin({ ...login, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Signin with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={login.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={login.password}
          handleChange={handleChange}
          required
        />
      </form>
      <div className="buttons">
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={() => signInWithGoogle()} isGoogleSignin>
          {''}
          SignIn with Google
        </CustomButton>
      </div>
    </div>
  );
};

export default SignIn;
