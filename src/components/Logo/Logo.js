import React from "react";
import burgerLogo from "../../assets/img/original.png";
import Css from "./Logo.module.css";

const logo = (props) => (
  <div className={Css.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
