import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();
const initialState = {
  dark: {
    backgroundColor: "black",
    color: "white",
    transition: "all .4s linear",
  },
  while: {
    backgroundColor: "white",
    color: "black",
    transition: "all .4s linear",
  },
};
export const ThemeContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const data = {};
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
