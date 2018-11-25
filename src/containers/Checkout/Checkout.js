import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

//import * as action from '../../store/actions/index';

class Checkout extends Component {

    /* Unnecessary after redux implementation */

/*    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        },
        totalPrice: 0
    };

    componentWillMount() {
        // Przenoszenie składników po URL
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()) {
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients, totalPrice: price})
    }*/

    checkoutCencelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContiuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render () {
        let summary = <Redirect to='/' />;
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to='/' /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary
                        checkoutCancel={this.checkoutCencelledHandler}
                        checkoutContiue={this.checkoutContiuedHandler}
                        ingredients={this.props.ings}/>
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        // Ciekawe przeniesienie składników do kontaktu
                        //render={(props) => (<ContactData ingredients={this.props.ings} totalPrice={this.props.totalPrice} {...props} />)}
                        component={ContactData} />
                </div>
            );
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};

/*const mapDispatchToProps = dispatch => {
    return {
        onInitPurchase: () => dispatch(action.puchaseInit())
    }
};*/

export default connect(mapStateToProps)(Checkout);