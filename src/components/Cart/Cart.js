import './Cart.css';
import {connect} from "react-redux";
import {removeFromCart} from "../../store/actions/cart";
import React, {Component} from 'react';

class Cart extends Component {
    state = {
        purchasable: false,
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
                    <button className='OrderButton' disabled={!this.props.cartProducts.length}>Order now</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartProducts: state.cart.cart,
    totalPrice: state.cart.totalPrice,
});
const mapDispatchToProps = dispatch => ({
    removeFromCart: dishInfo => dispatch(removeFromCart(dishInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
