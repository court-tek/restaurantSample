import React, { Component } from "react";
import SpecMenuItems from "../containers/specialMenuItems";

class SpecialMenu extends Component {
  render() {
    let priceStyle = {
      textAlign: "center",
      background: "red",
      border: "10px solid rgba(255,255,255,.7)",
      height: "100px",
      width: "100px"
    };

    let titleStyle = {
      fontWeight: 600,
      fontSize: "0.9rem",
      textAlign: "center"
    };
    return (
      <section id="specialMenu">
        <div className="container">
          <h5 className="comp-title">Special Menu</h5>
          <h2 style={{ textAlign: "center" }}>
            Delicious Flavor of The Carribean
          </h2>
          <SpecMenuItems />
          <a
            className="link"
            href="/menu"
            style={{
              color: "green",
              textAlign: "center",
              display: "block",
              paddingTop: "50px"
            }}
          >
            View Full Menu
          </a>
        </div>
      </section>
    );
  }
}

export default SpecialMenu;
