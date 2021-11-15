import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
const Theme = () => {
  const { theme, handleToggleTheme } = useContext(C);
  return (
    <>
      <input type="text" />
      <button>Toggle </button>
    </>
  );
};

export default Theme;
