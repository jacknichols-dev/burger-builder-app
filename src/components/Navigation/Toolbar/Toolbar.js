import React from "react";
import Css from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={Css.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Logo height="60%" />
    <nav className={Css.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
