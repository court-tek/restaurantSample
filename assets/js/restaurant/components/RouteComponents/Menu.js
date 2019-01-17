import React, { Component } from "react";
import SiteHeader from "../SiteHeader";
import MenuList from "../MenuList";

class Menu extends Component {
  render() {
    return (
      <div>
        <SiteHeader />
        <MenuList />
      </div>
    );
  }
}

export default Menu;
