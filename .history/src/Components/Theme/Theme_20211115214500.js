import React from "react";

const Theme = () => {
  return (
    <>
      <input
        type={inputType}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </>
  );
};

export default Theme;
