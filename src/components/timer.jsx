import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ endTime }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // const deadline = "April, 10, 2023";
  const deadline = endTime;

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []); //

  return (
    <div className="timer flex mt-4 justify-evenly w-full  text-white">
      <div className="bg-black border-2 border-solid border-black p-1 ">
        {days} days
      </div>
      <div className="bg-black p-1">{hours} hours </div>
      <div className="bg-black p-1">{minutes} minutes</div>
      <div className="bg-black p-1">{seconds} seconds</div>
    </div>
  );
};

export default Timer;
