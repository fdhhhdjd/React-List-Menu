import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
const Theme = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  return (
    <>
      <input type="text" />
      <button>Toggle </button>
    </>
  );
};

export default Theme;
