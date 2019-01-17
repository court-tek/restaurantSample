import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectMeal } from "../actions/index";

export class SpecMenuItems extends Component {
  showMenuDetails() {
    return this.props.specialMenu.map(specialItems => {
      return (
        <div key={specialItems.id} className="col-md-4">
          <div className="box" style={{ background: "#fff", padding: "20px" }}>
            <div
              className="box-img"
              style={{
                width: "100%",
                height: "200px",
                position: "relative",
                marginBottom: "50px"
              }}
            >
              <div key={specialItems.id} className="price-circle">
                ${specialItems.price}
              </div>
            </div>
            <span
              className="title"
              style={{
                textAlign: "center",
                display: "block",
                fontWeight: 600,
                fontSize: "0.9rem"
              }}
            >
              {specialItems.specName}
            </span>
            <p
              className="details"
              style={{
                fontWeight: 300,
                fontSize: "0.8rem",
                textAlign: "center",
                lineHeight: 1.5
              }}
            >
              {specialItems.description}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="row">{this.showMenuDetails()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    specialMenu: state.specialMenu
  };
}

export default connect(mapStateToProps)(SpecMenuItems);
