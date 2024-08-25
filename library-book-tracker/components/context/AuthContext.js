// src/context/AuthContext.js

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state (null if not logged in)

  // Login function
  const login = (username, password) => {
    // This is where you would typically handle authentication with a server.
    // For simplicity, we'll assume the login is successful if any username is provided.
    if (username && password) {
      setUser({ username });
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
