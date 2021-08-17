import { div } from "prelude-ls";
import React, { useState } from "react";
import fortunes from "./eightBallChoices";
import "./EightBall.css";

const EightBall = (props) => {
  const genRandomFortune = () => Math.floor(Math.random() * fortunes.length);
  const [fortune, setFortune] = useState({
    msg: "Think of a question",
    color: "black",
  });
  const changeFortune = () => {
    let idx = genRandomFortune();
    let randomFortune = fortunes[idx];
    setFortune(randomFortune);
  };
  return (
    <div
      className="fortuneContainer"
      style={{ backgroundColor: fortune.color }}
      onClick={changeFortune}
    >
      {fortune.msg}
    </div>
  );
};

export default EightBall;
