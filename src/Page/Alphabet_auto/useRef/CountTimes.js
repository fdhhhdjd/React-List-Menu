import React, { useRef } from "react";

const CountTimes = () => {
  const countTime = useRef(0);
  const handleClickTime = () => {
    countTime.current++;
    console.log(`click ${countTime.current} Times`);
  };
  return (
    <>
      <p>Open window console.log</p>
      <button onClick={handleClickTime}>Click Count Time</button>
    </>
  );
};

export default CountTimes;
