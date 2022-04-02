import React, { createContext, useContext, useState } from "react";

const HandlContext = createContext(null);
export const useHandle = () => useContext(HandlContext);

const HandlContextProvider = ({ children }) => {
  const [isDark, setDark] = useState(false);

  const value = {
    isDark,
    setDark,
  };

  return (
    <HandlContext.Provider value={value}>{children}</HandlContext.Provider>
  );
};

export default HandlContextProvider;
