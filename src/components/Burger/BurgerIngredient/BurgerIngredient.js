import React, { Component } from "react";
import Css from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={Css.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={Css.BreadTop}>
            <div className={Css.Seeds1}></div>
            <div className={Css.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={Css.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={Css.Cheese}></div>;
        break;
      case "salad":
        ingredient = <div className={Css.Salad}></div>;
        break;
      case "bacon":
        ingredient = <div className={Css.Bacon}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
