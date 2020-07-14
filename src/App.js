import React, { Component } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: "products"

    }
    this.onProductCLick = this.onProductCLick.bind(this);
    this.onAddProductCLick = this.onAddProductCLick.bind(this);
    this.onCartCLick = this.onCartCLick.bind(this);
  }

  onProductCLick() {
    this.setState({
      menu: "products"
    })
  }
  

  onAddProductCLick() {
    this.setState({
      menu: "add-product"
    })
  }

  onCartCLick() {
    this.setState({
      menu: "cart"
    })
  }
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="Menu">
          <button className="btn btn-success" onClick={this.onProductCLick}>Product</button>
          <button className="btn btn-danger" onClick={this.onAddProductCLick}>Add Product</button>
          <button className="btn btn-warning" onClick={this.onCartCLick}>Cart</button>
          
        </div>
        {this.state.menu === "products" ? <Products /> : null}
        {this.state.menu === "add-product" ? <AddProduct /> : null}
        {this.state.menu === "cart" ? <Cart /> : null}
        <hr />
        <Footer />
      </div>
    )
  }
}

export default App;
