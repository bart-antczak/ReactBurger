import React from 'react';
// Logowanie więcej informacji w konsoli
import { withRouter } from 'react-router-dom';

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from './Burger.css';

const burger = (props) => {
    console.log(props);

    // Zlozone mapowanie w celu wygenerowania okreslonej ilosc obiektow
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        // Przeksztalcenie w puste array TODO: Poczytac o map i reduce
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Zacznij wprowadzac skladniki!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bred-top" />
            {transformedIngredients}
            <BurgerIngredient type="bred-bottom" />
        </div>
    );
};

export default withRouter(burger);