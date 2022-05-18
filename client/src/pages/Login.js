import React from 'react';
import AuthForm from "../components/AuthForm.js"

const Login = ({loginType}) => {
  return (
    <AuthForm loginType={loginType} />
  );
}
 
export default Login;