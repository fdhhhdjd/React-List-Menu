import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
const Theme = () => {
  const { theme, handleToggleTheme, dark } = useContext(ThemeContext);
  return (
    <>
      <input
        type="text"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          transition: theme.transition,
        }}
      />
      <button onClick={handleToggleTheme}>
        Toggle {!dark ? "dark" : "light"}
      </button>
    </>
  );
};

export default Theme;
