import React, {Component, Fragment} from 'react';
import './Order.css';
import {connect} from "react-redux";
import {initCart, sendOrder} from "../../../store/actions/cart";

class Order extends Component {
    state = {
        name: '',
        address: '',
        phone: '',
    };
    valueChange = event => this.setState({[event.target.name]: event.target.value});
    submitOrder = async e => {
        e.preventDefault();
        let cart = this.props.cart.map(dish => ({name: dish.name, count: dish.count}));
        let data = {
            customer: {
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone,
            },
            cart,
        };
        await this.props.sendOrder(data);
        this.setState({name: '', address: '', phone: ''});
        this.props.cancel();
        this.props.initCart();
        alert('Your order has been successfully sent');
    };
    render() {
        return (
            <Fragment>
                <form action="#" onSubmit={this.submitOrder}>
                    <div className='FormWrapper'>
                        <label htmlFor="name">
                            <span>Your name</span>
                            <input
                                name='name'
                                onChange={this.valueChange}
                                value={this.state.name}
                                id='name'
                                type="text"
                                placeholder='Vasya'
                                required
                            />
                        </label>
                        <label htmlFor="address">
                            <span>You address</span>
                            <input
                                name='address'
                                onChange={this.valueChange}
                                value={this.state.address}
                                id='address'
                                type="text"
                                placeholder='Joomart Bokonbaev, 104a'
                                required
                            />
                        </label>
                        <label htmlFor="phone">
                            <span>Your phone number</span>
                            <input
                                name='phone'
                                onChange={this.valueChange}
                                value={this.state.phone}
                                id='phone'
                                type="tel"
                                placeholder='0770595857'
                                required
                                pattern="[0]{1}[1-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}"
                            />
                        </label>
                        <button type='submit'>Order now</button>
                    </div>
                </form>
            </Fragment>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    sendOrder: order => dispatch(sendOrder(order)),
    initCart: () => dispatch(initCart()),
});
export default connect(null, mapDispatchToProps)(Order);
