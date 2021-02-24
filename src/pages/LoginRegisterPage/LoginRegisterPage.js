import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './LoginRegisterPage.scss';

const LoginRegisterPage = () => {
  return (
    <div className="LoginRegisterPage">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default LoginRegisterPage;
