import axios from 'axios';
import React, { Component } from 'react'
import productservice from '../service/productservice';
import {useEffect,useState} from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: []
        } }
                componentDidMount() {
                    // productservice.getproduct ()
    axios.get('http://localhost:8080/api/product/fetchAll').then(response => {
    console.log(response);    
    this.setState({ product: response.data });
        }) }; 
 render() {
    
    const handleDelete = (id) => {
        console.log("printing id", id);
        axios.delete('http://localhost:8080/api/product/' + id).then(response => {
            console.log("Product deleted succeddfully", response.data);
            this.setState({ product: this.state.product.filter(product => product.id !== id) });
          })
          .catch((error) => {
            console.log("something went wrong", error);
          });
        }
    return (
            <div>
                <h1 className='text-center'>Product List Page</h1>
                <div className='row'>
                    <table className='' border="1">
<thead>
    <tr>
      <th>Prodcut ID</th>  
        <th>Product Name</th>
        <th>Product Price</th>
      
        <th>Product Image</th>
        <th>Product Quantity</th>
        <th>Actions</th>
</tr></thead>
<tbody>
    {
        this.state.product.map(product => 
    //<tr key={product.id}></tr>
    <tr >
        <td>{product.id}</td>
        <td>{product.productName}</td>
        <td>{product.price}</td>
               <td><img src={product.image} alt="product"/></td>
        <td>{product.quantity}</td>
        <td><button
                          className="btn btn-danger ml-2"  onClick={() => {   handleDelete(product.id); }}  >
                             
                          Delete
                        </button></td>
                        
          </tr>  )}
          </tbody>
                    </table>
            </div>
<div >
  <a href='/NewProduct'> <button> Add New Product </button></a>
  
</div>
<br/><br/><br/><br/><br/><br/><br/><br/>             
<br/><br/><br/><br/><br/><br/><br/><br/>             
            </div>
        );
    
}}
