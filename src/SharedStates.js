import { createContext, useState } from "react";

export const AuthContext = createContext();

const SharedStates = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const allContexts = { isLoggedIn, setIsLoggedIn };

  return (
    <AuthContext.Provider value={allContexts}>{children}</AuthContext.Provider>
  );
};

export default SharedStates;
