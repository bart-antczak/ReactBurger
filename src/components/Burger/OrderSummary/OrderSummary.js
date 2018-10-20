import React from 'react';

import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total price:</strong> {props.price.toFixed(2)}</p>
            <p>Continue?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Cencel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Auxi>
    )
};

export default orderSummary;