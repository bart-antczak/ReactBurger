import React from 'react';

import Auxi from '../../../hoc/Auxi';

const orderSummary = (props) => {
    const ingredientSummery = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        });
    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>With the fallowing ingredients:</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>Continue?</p>
        </Auxi>
    )
};

export default orderSummary;