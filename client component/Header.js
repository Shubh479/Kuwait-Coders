import React, { Fragment } from "react";
import mealsImg from "@/public/Assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Image from "next/image";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> Food App </h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <Image src={mealsImg} alt="Meals Picture" />
      </div>
    </Fragment>
  );
}
export default Header;
