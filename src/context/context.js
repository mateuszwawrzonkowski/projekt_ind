import React, { useContext, useState } from "react";
const AuthContext = React.createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const handleAuth = () => {
    setAuth(!auth);
  };
  const data = [auth, handleAuth];
  return <AuthContext.Provider value={data}>{children} </AuthContext.Provider>;
};
