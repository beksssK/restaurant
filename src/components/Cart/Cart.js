import './Cart.css';
import {connect} from "react-redux";
import {removeFromCart} from "../../store/actions/cart";
import React, {Component} from 'react';
import Modal from "../UI/Modal/Modal";
import Order from "./Order/Order";

class Cart extends Component {
    state = {
        purchasable: false,
        purchasing: false,
    };
    cancelPurchase = () => {
        this.setState({purchasing: false})
    };
    purchase = () => {
        this.setState({purchasing: true});
    };
    render() {
        return (
            <div className='Cart'>
                <h2 className='CartTitle'>Cart</h2>
                <h3 className='OrderedTitle'>Ordered Items:</h3>
                <div className='OrderedItems'>
                    {this.props.cartProducts.map(dish => (
                        <div className='CartDish' key={dish.id}>
                            <span>{dish.name} x {dish.count}</span>
                            <span className='CartDishPrice'>{dish.price * dish.count}</span>
                            <i className="fas fa-minus-circle" onClick={() => this.props.removeFromCart(dish)}/>
                        </div>
                    ))}
                </div>
                <div className='TotalOrders'>
                    <h3>Total:</h3>
                    <p>Доставка: 150</p>
                    <p>Итого: {this.props.totalPrice}</p>
                    <button className='OrderButton' disabled={!this.props.cartProducts.length} onClick={this.purchase}>Order</button>
                </div>
                <Modal show={this.state.purchasing} close={this.cancelPurchase}>
                    <Order cart={this.props.cartProducts} cancel={this.cancelPurchase}/>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartProducts: state.cart.cart,
    totalPrice: state.cart.totalPrice,
    loading: state.cart.loading,
});
const mapDispatchToProps = dispatch => ({
    removeFromCart: dishInfo => dispatch(removeFromCart(dishInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
