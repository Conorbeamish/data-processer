import React from 'react';
import AuthForm from "../components/AuthForm.js";
import styled from 'styled-components';

const LoginStyles = styled.div`
  min-height: 80vh;
  display: flex ;
  justify-content: center ;
  align-items: center ;
  form{
    display: flex ;
    justify-content:space-evenly ;
    flex-direction: column ;
    padding: 5rem 5rem ;
    background-color: white ;
    border-radius: 6px;
    min-height: 40vh ;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    button{
      background-color: white ;
      text-decoration:none ;
      color: black ;
      background-color: #405cf5;
      border-radius: 6px;
      border-width: 0;
      box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
      box-sizing: border-box;
      color: #fff;
      padding: 0.5rem 2rem;
      &:hover{
        cursor: pointer;
      }
      
      
    }

  }
`

const Login = ({loginType}) => {
  return (
    <LoginStyles>
      <AuthForm loginType={loginType} />
    </LoginStyles>
  );
}
 
export default Login;