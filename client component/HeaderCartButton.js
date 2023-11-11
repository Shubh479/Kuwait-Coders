import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "@/context/cart-context";
import { useRouter } from "next/navigation";

function HeaderCartButton(props) {
  const [highlight, setHighlight] = useState(false);
  const btnClasses = `${classes.button} ${highlight ? classes.bump : ""}`;

  const cartCtx = useContext(CartContext);
  let { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const router = useRouter();

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setHighlight(true);

    setTimeout(() => {
      setHighlight(false);
    }, 300);
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
}
export default HeaderCartButton;
