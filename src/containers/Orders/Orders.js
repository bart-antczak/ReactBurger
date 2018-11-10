import React, {Component} from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders  extends Component {

    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        // Skomplikowane wyciąganie danych z bazy
        // Nie można zrobić bezpośrednio, bo firebase nadaje indywidualne ID każdemu z zamówień
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                this.setState({loading: false})
            })
    }

    render () {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        ingredients={order.ingredients}
                        price={order.price}
                        key={order.id}/>
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);