import React, {Component} from 'react';
import {connect} from "react-redux";
import './Dishes.css';
import {addToCart} from "../../store/actions/cart";
import {fetchDishes} from "../../store/actions/dishes";

class Dishes extends Component {
    componentDidMount() {
        this.props.fetchDishes();
    }
    render() {
        return (
            <div className='Dishes'>
                {this.props.productsState.map(product => (
                    <div className='ProductItem' key={product.id}>
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
                        <button onClick={() => this.props.addToCart(product)}>
                            <i className="fas fa-cart-plus"/>
                        </button>
                    </div>
                ))}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    productsState: state.products.allProducts,
});
const mapDispatchToProps = dispatch => ({
    addToCart: dishInfo => dispatch(addToCart(dishInfo)),
    fetchDishes: () => dispatch(fetchDishes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
