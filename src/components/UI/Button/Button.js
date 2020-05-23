import React from "react";
import Css from "./Button.module.css";

const button = (props) => (
  <button
    className={[Css.Button, Css[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
