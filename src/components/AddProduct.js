import React, { Component } from 'react';
// import './AddProduct.css';

class AddProduct extends Component {
	onAddProduct(event) {
		event.preventDefault();
		let title = event.target["title"].value;
		let price = event.target["price"].value;
		let image = event.target["image"].files.item(0).name;
		let category = event.target["category"].value;
		
		let product = {
			title: title,
			price: price,
			image : image,
			category : category
		}

		let products = JSON.parse(localStorage.getItem("lsc-products"));
		if (!products) {
			products = [];

		}

		products.push(product);
		localStorage.setItem("lsc-products", JSON.stringify(products));
		console.log(products);
	}

	render() {

		return (
			<form className="AddProduct" onSubmit={this.onAddProduct}>
				{/* <hr/><hr/> */}
				<h4>ADD PRODUCTS</h4>
				<input type="text" name="title" placeholder="title" />
				<input type="text" name="price" placeholder="price" />
				<input type="file" name="image" placeholder="Chọn file" />
				<label >Choose a category:</label>
				<select id="loai" name="category">
					<option value="Chó">Chó</option>
					<option value="Mèo">Mèo</option>
					<option value="Phụ kiện">Phụ kiện</option>
				</select>
				<hr />
				<button className="btn btn-success"> ADD </button>
			</form>
		)
	}
}
export default AddProduct;