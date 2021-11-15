import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const data = {};
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
