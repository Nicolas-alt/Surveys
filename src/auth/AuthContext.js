import React, { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext();

const initialState = {
  _id: null,
  checking: true,
  logged: false,
  userName: null,
  email: null,
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const Login = (email, password) => {};
  const Register = (userName, email, password) => {};
  const AuthToken = useCallback(() => {}, []);

  const logOut = () => {};

  return (
    <AuthContext.Provider
      value={{
        Login,
        Register,
        AuthToken,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
