import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "./UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Cheese Corn Sandwich",
    description: "Healthy veggies",
    price: 90,
  },
  {
    id: "m2",
    name: "Schezwan Fried Rice",
    description: "A Chinese specialty!",
    price: 130,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "Indian, raw, meaty",
    price: 199,
  },
  {
    id: "m4",
    name: "Vegetable Curry",
    description: "Healthy...and green...",
    price: 240,
  },
];

function AvailableMeals() {
  // individual meal item stored in MealItem component
  const mealsList = DUMMY_MEALS.map((meals) => (
    <MealItem
      key={meals.id}
      id = {meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    />
  ));
  return (
    <section className={classes.meals}>
      {/* over all meal list will display here */}
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
export default AvailableMeals;
