export const selectMeal = (meal) => {
  console.log("You clicked on a plate: ", meal.mealItem);
  return {
    type: "MEAL_SELECTED",
    payload: meal
  }
};
