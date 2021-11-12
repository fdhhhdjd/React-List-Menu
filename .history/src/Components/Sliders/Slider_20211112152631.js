import React, { useState, useEffect } from "react";
import "./Slider.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { SliderData } from "./Carousel";
const Slider = () => {
  const [current, setCurrent] = useState(4);
  const length = SliderData.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const moveDot = (index) => {
    setCurrent(index);
  };
  // useEffect(() => {
  //   const slider = setInterval(() => {
  //     if (current !== length) {
  //       setCurrent(current + 1);
  //     } else if (current === length) {
  //       setCurrent(0);
  //     }
  //   }, 1000);
  //   console.log(current);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [current, length]);
  return (
    <>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((item, index) => {
          return (
            <div
              key={index}
              className={index === current ? "slide active" : "slide"}
            >
              {index === current && (
                <img
                  src={item.image}
                  key={index}
                  alt="Travel image"
                  className="image"
                />
              )}
            </div>
          );
        })}
        <div className="container-dots">
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index)}
              className={current === index ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Slider;
