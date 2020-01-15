import React, {Component, Fragment} from 'react';
import './Order.css';
import {connect} from "react-redux";
import {sendOrder} from "../../../store/actions/cart";

class Order extends Component {
    state = {
        name: '',
        address: '',
        phone: '',
    };
    valueChange = event => this.setState({[event.target.name]: event.target.value});
    submitOrder = e => {
        e.preventDefault();
        let cart = this.props.cart.map(dish => ({name: dish.name, count: dish.count}));
        console.log(cart);
        let data = {
            customer: {
                name: this.state.name,
                address: this.state.address,
                phone: this.state.phone,
            },
            cart,
        };
        this.props.sendOrder(data);
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
                                id='phone'
                                type="tel"
                                placeholder='0770595857'
                                required
                                pattern="[0]{1}[5-9]{3}[0-9]{2}[0-9]{2}[0-9]{2}"
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
});
export default connect(null, mapDispatchToProps)(Order);
