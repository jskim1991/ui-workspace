import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            // console.log("inter", props.ingredients[igKey]);
            return [...Array(props.ingredients[igKey])] // [ , ]
                .map((k, i) => {
                    // console.log("final", i);
                    return <BurgerIngredient key={igKey + i} type={igKey} />;
                })
        });

    console.log(transformedIngredients);

    const combinedIngredients = transformedIngredients.reduce((arr, el) => {
        return arr.concat(el);
    }, []);
    console.log(combinedIngredients);

    if (combinedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />


        </div>
    );
};

export default burger;