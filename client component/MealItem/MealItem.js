import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "@/context/cart-context";

function MealItem(props) {
  // getting data from contextAPI
  const cartCtx = useContext(CartContext);

  // addToCartHandler function actuated when clicked on +Add button from MealItemForm
  function addToCartHandler(amount) {
  // add data to contextAPI
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }
  const price = `Rs ${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
export default MealItem;
