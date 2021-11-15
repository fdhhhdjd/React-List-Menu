import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const data = {};
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
