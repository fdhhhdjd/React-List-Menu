import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import Gallery from "./gallery/Gallery";
import "./Image.css";
//todo: -->npm install @material-ui/icons
const Choose_img = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Choose Image Watch 😜</h1>
      <div style={{ fontSize: "30px", textAlign: "center" }}>
        I am a
        <span style={{ color: "red", fontWeight: "bold", marginLeft: "10px" }}>
          <Typewriter
            loop
            cursor
            cursorStyle={"_"}
            delaySpeed={90}
            deleteSpeed={1000}
            words={["developer", "Front-End Full Stack ReactJs"]}
          />
        </span>
      </div>
      <Gallery />
    </>
  );
};

export default Choose_img;
