import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [videoData, setVideoData] = useState(null);
  return (
    <AuthContext.Provider value={{ score, setScore ,videoData,setVideoData }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
