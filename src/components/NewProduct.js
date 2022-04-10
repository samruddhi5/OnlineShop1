import React from 'react'
import{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function NewProduct() {
    
    const [product,setProduct]=useState({"price":0.0,"image":"abc.png","quantity":0,"productName":""});
    useEffect(()=>{
        axios.get('http://localhost:8080/api/product').then(response => {
        console.log(response);
        setProduct(response.data)
        }).catch(error=>{
            console.log(error)
        })
    },[])

   

     const postData=(e)=>{
        e.preventDefault();
        debugger;
        console.log(product);
        axios.post('http://localhost:8080/api/product/addproduct',
            product
        ).then(response=>{
            const result=response.data
            
            if(response.status===200){
            console.log(response.data);
          
            console.log(response.data.ref_no);
            }else{
                console.log(e);
            }
        }).catch(error=>{
            console.log(error)
        })
        //useNavigate("/Product");

    }

  return (
    <div>
    <label>Product Name</label>
        <input type="text" value={product.productName} onChange={(e)=>setProduct({...product,productName:e.target.value})}/><br/><br/>
        <label>Product Price</label>
        <input type="text" value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})}/><br/><br/>
        <label>Product Image</label>
        <input type="text" value={product.image} onChange={(e)=>setProduct({...product,image:e.target.value})}/><br/><br/>
        <label>Product Quantity</label>
        <input type="text" value={product.quantity} onChange={(e)=>setProduct({...product,quantity:e.target.value})}/><br/><br/>
        <button onClick={(e)=>postData(e)}> Add New Product </button>
        <br/><br/><br/><br/><br/><br/><br/><br/> </div> 
  )
}
