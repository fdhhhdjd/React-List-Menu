import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();
const Themes = {
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

  const handleToggleTheme = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };
  useEffect(() => {
    const isDarks = localStorage.setItem("dark") === "true";
    setDark(isDarks);
  }, [dark]);
  const theme = dark ? theme.dark : theme.light;

  const data = { handleToggleTheme, theme, andleToggleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
