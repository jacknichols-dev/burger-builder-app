import React from "react";
import Css from "./BuildControl.module.css";

const buildControl = (props) => (
  <div className={Css.BuildControl}>
    <div className={Css.Label}>{props.label}</div>
    <button
      className={Css.Less}
      onClick={props.lessClicked}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={Css.More} onClick={props.moreClicked}>
      More
    </button>
  </div>
);

export default buildControl;
