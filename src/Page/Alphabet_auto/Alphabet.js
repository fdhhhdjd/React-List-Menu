import React, { useState, useRef, useEffect } from "react";
//todo:---> npm i react-simple-typewriter || npm install react-simple typewriter
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import AutoCount from "./useRef/AutoCount";
import CountTimes from "./useRef/CountTimes";
import Increase from "./useRef/Increase++";
import InputFocus from "./useRef/InputFocus";
import SizeButton from "./useRef/Sizebutton";
const Alphabet = () => {
  return (
    <>
      <div style={{ paddingTop: "3rem", margin: "auto 0", fontSize: "30px" }}>
        I am a
        <span style={{ color: "red", fontWeight: "bold", marginLeft: "10px" }}>
          <Typewriter
            loop
            cursor
            cursorStyle={"_"}
            delaySpeed={20}
            deleteSpeed={1000}
            words={["developer", "Front-End Full Stack ReactJs"]}
          />
        </span>
      </div>
      <div>
        <h1>Focus input</h1>
        //! useRef() 😁
        <InputFocus />
      </div>
      <div>
        <h1> Count Times</h1>
        <CountTimes />
      </div>
      <div>
        <h1>Count Increase 🤣</h1>
        <Increase />
      </div>
      <div>
        <h1>Size Button🤣</h1>
        <SizeButton />
      </div>
      <div>
        <h1>Auto Count Increase 🤣</h1>
        <AutoCount />
      </div>
    </>
  );
};

export default Alphabet;
