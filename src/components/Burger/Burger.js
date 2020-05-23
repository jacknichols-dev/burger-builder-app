import React from "react";
import Css from "./Burger.module.css";
import BurgerIngredient from "../Burger/BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients) // [salad, bacon, cheese, meat]
    .map((ingredientKey) => {
      //   console.log(ingredientKey);
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        //props.ingredients[ingredientKey] is the number of the current ingredient
        return (
          <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={Css.Burger}>
      <BurgerIngredient type="bread-top" />
      {/* <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" /> */}
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
