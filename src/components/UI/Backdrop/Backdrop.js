import React from "react";
import Css from "./Backdrop.module.css";

const backdrop = (props) =>
  props.show ? (
    <div className={Css.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
