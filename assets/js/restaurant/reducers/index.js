import { combineReducers } from "redux";
import MealReducer from "./reducer-meals";
import ActiveMealReducer from "./reducer-activeMeal";
import SpecialMenu from "./reducer-specialMenu";

const allReducers = combineReducers({
  meals: MealReducer,
  activeMeal: ActiveMealReducer,
  specialMenu: SpecialMenu
});

export default allReducers;
