import React, { Component } from 'react';
import './Product.css';
import CurrencyFormat from 'react-currency-format';

class ProductItem extends Component {
    render() {
        return (
            <div className="show">
                <h2>{this.props.item.title}</h2>
                <div><img src={"Image/" + this.props.item.image} width="200px" height="200px" name="image" /></div>
                <h4><CurrencyFormat className="formatmoney" thousandSeparator={true} value={this.props.item.price} /></h4>
                <button className="btn btn-warning" onClick={this.props.onItemClick}>BUY</button>
                <button className="btn btn-dark" onClick={this.props.onDetailClick}>DETAIL</button>
            </div>
        )
    }
}
export default ProductItem;