import React from "react";
import MealList from "../containers/mealList";
import MealDetail from "../containers/mealDetail";


const MenuList = () => (
  <section id="menulist">
    <div className="container">
    <div className="tool one">
      <h2 className="special">Menu Items</h2>
      <MealList />
    </div>
    <div className="tool two">
      <h2 className="special">Menu Item Details</h2>
      <MealDetail />
    </div>
    </div>
  </section>
);

export default MenuList;
