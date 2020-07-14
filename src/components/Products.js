import React, { Component } from 'react';
import ProductItem from './ProductItem';
import './Product.css';
class Products extends Component {
    constructor() {
        super();
        var products = JSON.parse(localStorage.getItem("lsc-products"));
        if (!this.products) {
            this.products = [];
        }

        this.state = {
            search: " ",
            products: products
            
        }

        console.log(this.products);
        this.onchange = this.onchange.bind(this);
        this.SortByPriceAsc = this.SortByPriceAsc.bind(this);
        this.SortByPriceDsc = this.SortByPriceDsc.bind(this);
    }
    onItemClick(item) {
        return (event) => {
            let cart = JSON.parse(localStorage.getItem('lsc-cart'));
            if (!cart) {
                cart = [];
            }
            let oldItem = cart.find((element) => element.title === item.title);
            console.log(oldItem);
            if (oldItem) {
                oldItem.quantity += 1;

            }
            else {
                item.quantity = 1
                cart.push(item);
            }

            localStorage.setItem("lsc-cart", JSON.stringify(cart));
            alert("Sản phẩm đã được thêm vào giỏ hàng");
            console.log(cart);
        }
    }
    onDetailClick(item) {
        return (event) => {

        }
    }
    SortByPriceAsc() {

        let sortedProductsAsc;
        sortedProductsAsc = this.state.products.sort((a, b) => {
            return parseInt(a.price) - parseInt(b.price);
        })

        this.setState({
            products: sortedProductsAsc
        })
    }
    SortByPriceDsc() {

        let sortedProductsDsc;
        sortedProductsDsc = this.state.products.sort((a, b) => {
            return parseInt(b.price) - parseInt(a.price);
        })

        this.setState({
            products: sortedProductsDsc
        })
    }

    onchange(event){
        event.preventDefault();
        var search = event.target["search"].value;
        this.setState({search: search});
        console.log(this.state.search);
    };

    showProduct() {
        const { search } = this.state;
        const filteredProducts = this.state.products.filter(product => {
            return product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        var listProduct = filteredProducts.map((item, index) =>
            <ProductItem
                key={index}
                item={item}
                onItemClick={this.onItemClick(item)}
            />);

        return listProduct;
    }
    render() {
        return (
            <div>
                <div className="content">
                    <h4>PRODUCTS</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h3><i class="fas fa-sort-amount-up" onClick={this.SortByPriceAsc}></i></h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h3><i class="fas fa-sort-amount-down" onClick={this.SortByPriceDsc}></i></h3>

                    <form className="search-container" onSubmit = {this.onchange}>
                        <input type="text" name="search" placeholder="Search.." />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>

                <div className="Products">
                    {this.showProduct()}
                </div>
            </div>
        );
    }
}
export default Products;