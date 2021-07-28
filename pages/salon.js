import React, { useState } from "react";
import Navbar from "../components/navbar";
import HeadTag from "../components/HeadTag";
import Link from "next/link";
import Products from "../components/product/products";
import Data from '../components/Database/Data.json'
import Header from '../components/Header'
import Filter from "../components/product/Filter";
import Cart from '../components/product/Cart';
export default class Salon extends React.Component {
	constructor() {
		super();
		this.state ={
			products: Data.products,
			cartItems: [],
			size: "",
			sort:"",
		};
	} 
	addToCart = (product)=> {
		const cartItems = this.state.cartItems.slice();
		let alreadyInCart = false;
		cartItems.forEach((item) => {
			if (item._id === product._id){
				item.count++;
				alreadyCart = true;
			}
		});
		if(!alreadyInCart){
			cartItems.push({...product, count: 1});
		}
		this.setState({cartItems});
	};
	sortProducts = (event) => {
		const sort = event.target.value;
         console.log(event.target.value);
		 this.setState((state) => ({
			 sort: sort ,
			 products: this.state.products
			 .slice()
			 .sort((a, b) => 
			 sort === "lowest"
			 ? a.price > b.price
			 ? 1
			 : -1
			 : sort === "highest"
			 ? a.price < b.price 
			 ? 1
			 : -1
			 : a._id < b._id
			 ? 1
			 : -1
			 ),
		 }));
	};
	filterProducts = (event) => {
		console.log(event.target.value);
			if(event.target.value === ""){
				this.setState({size: event.target.value, product:Data.products});
			} else{
			this.setState({
                 size: event.target.value,
			     products: Data.products.filter(
				     (product) => product.availableSizes.indexOf(event.target.value)>=0
				),
		 });
			}
			
	};
	render(){
	return (
		<div className="grid-container">
			<HeadTag title="Salon" />
			<Navbar></Navbar>
			<Cart cartItems={this.state.cartItems}></Cart>
			<Header></Header>
			<Filter 
			count={this.state.products.length}
            size={this.state.size}
			sort={this.state.sort}
			filterProducts={this.filterProducts}
			sortProducts={this.sortProducts}>
			</Filter>
			<Products products={this.state.products} addToCart={this.addToCart}></Products>
		</div>
	);
}

}