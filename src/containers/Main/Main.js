import React, {Component} from 'react';
import Dishes from "../../components/Dishes/Dishes";
import Cart from "../../components/Cart/Cart";
import './Main.css';
class Main extends Component {
    render() {
        return (
            <div className='Main'>
                <div className='Content'>
                    <Dishes/>
                    <Cart/>
                </div>
            </div>
        );
    }
}

export default Main;
