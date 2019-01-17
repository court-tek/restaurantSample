import React, { Component } from "react";
import { connect } from "react-redux";

class MealDetail extends Component {
  render() {
    let marg = {
      marginBottom: "8px"
    }
    let flexBox = {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }
    if (!this.props.meal) {
      return (<h4>Select a menu item...</h4>);
    }

    return (
      <div style={ flexBox } className="detail">
        <img style={ marg } src={this.props.meal.thumbnail} width="300" height="300" />
        <h3 style={ marg }>Small: {this.props.meal.pricesmall}</h3>
        <h3 style={ marg }>Large: {this.props.meal.pricelarge}</h3>
        <h4 style={ marg }>{this.props.meal.description}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      meal: state.activeMeal
  };
}

export default connect(mapStateToProps)(MealDetail);
