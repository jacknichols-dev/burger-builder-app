import React from "react";
import Css from "./NavigationItem.module.css";

const navigationItem = (props) => (
  <li className={Css.NavigationItem}>
    <a href={props.link} className={props.active ? Css.active : null}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
