import React from "react";
import Css from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={Css.NavigationItems}>
    <NavigationItem link="#" active>
      Burger builder
    </NavigationItem>
    <NavigationItem link="#">Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
