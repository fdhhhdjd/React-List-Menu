import React, { useState } from "react";
//todo:Setting -->npm install react-particles-js
import Particles from "react-particles-js";
import logo from "../../logo1.png";
import "./Button.css";
const Button_Particle = () => {
  return (
    <div className="main">
      helo toi la heo dev web
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 10,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Button_Particle;
