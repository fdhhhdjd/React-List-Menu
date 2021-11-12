import React, { useState, useEffect } from "react";
import "./Copy.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
const colors = [
  "#FF0000",
  "#00FF00",
  "#FFFF00",
  "#0000FF",
  "#FFFFFF",
  "#800080",
  "#FF00FF",
  "#FF9900",
  "#330000",
  "#33FFFF",
];
const CopyColor = () => {
  const [background, setBackground] = useState("#071415");
  return (
    <>
      <div className="app" style={{ background: background }}></div>
    </>
  );
};

export default CopyColor;
