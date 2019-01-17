import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectMeal } from "../actions/index";

class MealList extends Component {

  createMenuItems() {
      return this.props.meals.map((meal) => {
        return (
          <li key={meal.id} onClick={() => this.props.selectMeal(meal)}>{meal.mealItem}</li>
        );
      });
  }

  render () {
    return (
      <ul>
        {this.createMenuItems()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
      meals: state.meals
  };
}

function matchDispactchToProps(dispatch){
  return bindActionCreators({ selectMeal: selectMeal }, dispatch)
}

export default connect(mapStateToProps, matchDispactchToProps)(MealList);
