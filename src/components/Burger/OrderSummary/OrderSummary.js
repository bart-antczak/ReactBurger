import React, {Component} from 'react';

import Auxi from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
       // console.log('[OrderSummary] WillUpdate');
    }

    render () {

        const ingredientSummery = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
            });

        return (
            <Auxi>
                <h3>Your Order</h3>
                <p>With the fallowing ingredients:</p>
                <ul>
                    {ingredientSummery}
                </ul>
                <p><strong>Total price:</strong> {this.props.price.toFixed(2)}</p>
                <p>Continue?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cencel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Auxi>
        )
    }
}

export default OrderSummary;