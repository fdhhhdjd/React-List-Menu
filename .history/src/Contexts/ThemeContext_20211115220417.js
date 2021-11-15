import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();
const Themes = {
  dark: {
    backgroundColor: "black",
    color: "white",
    transition: "all .4s linear",
  },
  light: {
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
    const isDarks = localStorage.getItem("dark") === "true";
    setDark(isDarks);
  }, [dark]);
  const theme = dark ? Themes.dark : Themes.light;

  const data = { theme, handleToggleTheme, dark };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
