import React, { Component } from 'react';
import CartItem from './CartItem';
import CurrencyFormat from 'react-currency-format';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            cart: JSON.parse(localStorage.getItem('lsc-cart'))
        }
    }
    removeCart(key) {
        return (event) => {
            // console.log('lsc-cart');
            let cart = JSON.parse(localStorage.getItem("lsc-cart"));
            cart.splice(key, 1);
            localStorage.setItem("lsc-cart", JSON.stringify(cart));
            alert("Bạn đã xóa 1 sản phẩm");
            console.log('lsc-cart');
            this.setState({
                cart: cart,
            })
        }
    }
    Tang(item) {
        return (event) => {
            let cart = JSON.parse(localStorage.getItem('lsc-cart'));
            let products = cart.find((element) => element.title === item.title);
            products.quantity += 1
            localStorage.setItem('lsc-cart', JSON.stringify(cart));
            this.setState({
                cart: cart,
            })
        }
    }
    Giam(key,item) {
        return (event) => {
            let cart = JSON.parse(localStorage.getItem('lsc-cart'));
            let products = cart.find((element) => element.title === item.title);
            if (products.quantity > 1) {
                products.quantity -= 1;
                localStorage.setItem('lsc-cart', JSON.stringify(cart));
                this.setState({
                    cart: cart,
                })
            }
            else {
                let cart = JSON.parse(localStorage.getItem("lsc-cart"));
                cart.splice(key, 1);
                localStorage.setItem("lsc-cart", JSON.stringify(cart));
                console.log('lsc-cart');
                this.setState({
                    cart: cart,
                })
            }
        }
    }
    Total() {
        let sum = 0;
        let { cart } = this.state;
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].quantity * cart[i].price;
        }
        return sum;
    }
    render() {
        return (
            <div className="Cart">
                {/* <hr/><hr/> */}
                <h4>SHOPPING CART</h4>
                <table border="2px" className="table-hover">
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Image</th>
                    <th>Số lượng</th>
                    <th>Tạm tính</th>
                    <th>Xóa</th>
                    {
                        this.state.cart.map((item, index) =>
                            <CartItem
                                item={item}
                                key={index}
                                removeCart={this.removeCart(index)}
                                onTang={this.Tang(item)}
                                onGiam={this.Giam(index,item)}
                            />)
                    }
                    <td><CurrencyFormat className="formatmoney" thousandSeparator={true}prefix={'Total: '} value={this.Total()} /></td>
                   
                </table>
                <button className="btn btn-success" onClick={this.Total()}>Thanh Toan</button>

            </div>
        );
    }

}
export default Cart;