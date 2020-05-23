import React from "react";
import Css from "./DrawerToggle.module.css";

const drawerToggle = (props) => (
  <div className={Css.Icon} onClick={props.clicked}>
    <span className={Css.Hamburger} />
  </div>
);

export default drawerToggle;
