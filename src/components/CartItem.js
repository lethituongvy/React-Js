import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';
import './cart.css';
class CartItem extends Component {
    
    render() {
        return (
            <tr>
                <td>{this.props.item.title}</td>
                <td><CurrencyFormat className="formatmoney" thousandSeparator={true} value={this.props.item.price} />VND</td>
                <td><img src={ "image/" + this.props.item.image} width="100px" height="100px" /></td>
                <td><button onClick={this.props.onTang}>+</button>{this.props.item.quantity}<button onClick={this.props.onGiam}>-</button></td>
                <td><CurrencyFormat className="formatmoney" thousandSeparator={true} value={this.props.item.quantity * this.props.item.price} />VND</td>
                <td><button className="btn btn-success" onClick={this.props.removeCart}>Delete from Cart</button></td>
            </tr>
            
        )
    }
}
export default CartItem;