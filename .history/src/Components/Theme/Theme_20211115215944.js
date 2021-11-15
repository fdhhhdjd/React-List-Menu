import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
const Theme = () => {
  const { theme, handleToggleTheme, dark } = useContext(ThemeContext);
  return (
    <>
      <input type="text" />
      <button>Toggle {!dark ? "dark" : "light"} </button>
    </>
  );
};

export default Theme;
