import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Home from "./RouteComponents/Home";
import Menu from "./RouteComponents/Menu";
import About from "./RouteComponents/About";
import {browserHistory} from 'react-router';


class MainHeader extends Component {
  render() {
    let headerStyle = {
      color: "#fff"
    };
    let dropHeaderStyle = {
      color: "#fff",
      padding: "10px 20px",
      display: "block"
    };
    return (
      <Router>
        <div className="App">
          <header style={{ zIndex: 5 }}>
            <div className="container">
              <div
                className="Logo"
                style={{
                  fontSize: "25px",
                  fontWeight: "bold"
                }}
              >
                <NavLink style={headerStyle} to="/">
                  IR
                </NavLink>
              </div>

              <input
                type="checkbox"
                style={{ display: "none" }}
                id="menuToggle"
              />

              <label htmlFor="menuToggle"
                className="hamburger pull-right visible-xs"
              >
                <i
                  style={{ fontSize: "25px", display: "block", float: "right" }}
                  className="fas fa-bars"
                />
              </label>

              <nav style={{ padding: "20px" }} className="main-nav">
                <label htmlFor="menuToggle" className="close pull-left">
                  <i className="fas fa-times" />
                </label>
                <ul>
                  <li>
                    <NavLink style={dropHeaderStyle} to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={dropHeaderStyle} to="/menu">
                      Menu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={dropHeaderStyle} to="/about">
                      About
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <ul className="visible-sm visible-md visible-lg">
                <li>
                  <NavLink style={headerStyle} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink style={headerStyle} to="/menu">
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink style={headerStyle} to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </header>

          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default MainHeader;
