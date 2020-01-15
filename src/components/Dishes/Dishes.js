import React from 'react';
import {connect} from "react-redux";
import './Dishes.css';
import {addToCart, removeFromCart} from "../../store/actions/cart";

const Dishes = props => {
    return (
        <div className='Dishes'>
            {props.productsState.map(product => (
                <div className='ProductItem'>
                    <div className='ProductImage'>
                        <img src={product.img} width='200px' height='auto' alt=""/>
                    </div>
                    <div>
                        <p className='ProductName'>
                            {product.name}
                        </p>
                        <p className='ProductPrice'>
                            KGS {product.price}
                        </p>
                    </div>
                    <button>
                        <i className="fas fa-cart-plus"/>
                    </button>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    productsState: state.products.allProducts,
});
const mapDispatchToProps = dispatch => ({
    addToCart: dishName => dispatch(addToCart(dishName)),
    removeFromCart: dishName => dispatch(removeFromCart(dishName)),
});

export default connect(mapStateToProps)(Dishes);
