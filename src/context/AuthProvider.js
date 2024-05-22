import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
export const AuthUpdateContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    role: null,
    email: null,
  });

  const setAuthInfo = (token, role, email) => {
    setAuthState({ token, role, email });
  };

  const clearAuthInfo = () => {
    setAuthState({ token: null, role: null, email: null });
  };

  return (
    <AuthContext.Provider value={authState}>
      <AuthUpdateContext.Provider value={{ setAuthInfo, clearAuthInfo }}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
};