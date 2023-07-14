import React from "react";
import classes from "./Home.module.css";
import Button from "./Button";
import { useState } from "react";

function Home() {
  const [res, setRes] = useState("");

  const buttons = [
    "C",
    "Del",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "=",
  ];

  const findVal = () => {
    let result = Function("return " + res)();
    setRes(result.toString());
  };

  const handler = (arg) => {
    if (res === "Infinity") {
      setRes("");
      return;
    }

    if (arg === "C") {
      setRes("");
    } else if (arg === "=") {
      findVal();
    } else if (arg === "Del") {
      let n = res.length;
      if (n > 0) {
        setRes(res.slice(0, n - 1));
      }
    } else {
      setRes(res.concat(arg));
    }
  };

  return (
    <div className={classes.home}>
      <div className={classes.inner}>
        <div className={classes.result}>
          <div className={classes.resbox}>{res}</div>
        </div>

        <div className={classes.btns}>
          {buttons.map((ele, index) => {
            return <Button handler={handler} value={ele} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
