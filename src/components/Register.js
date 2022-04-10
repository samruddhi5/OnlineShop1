import axios from 'axios';
import React, { Component } from 'react'
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register()  {

const [user,setUser]=useState({"name":"","address":"","email":"aa@gmail.com","password":"","role":"customer"});
// useEffect(()=>{
//     axios.get('http://localhost:8080/api/customer/details').then(response => {
//     console.log(response);
//     setUser(response.data)
//     }).catch(error=>{
//         console.log(error.response)
//     })
// },[])
const postData=(e)=>{
 e.preventDefault();
 console.log(user);  
 debugger;      
    axios.post('http://localhost:8080/api/customer/post',user).then(response=>{
                console.log(response)
    }).catch(error=>{
        console.log(error.response.data)
    })
    
}

 
return (
<div style={{ backgroundColor: "burlywood" }}>
    <h3>Registration</h3>
    <form className='form-group' border="1">
<label>Enter Name</label>
<input type="text" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/><br/><br/>
    <label>Enter Address</label>
    <input type="text" value={user.address} onChange={(e)=>setUser({...user,address:e.target.value})}/><br/><br/>
    <label>Enter Email</label>
    <input type="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}/><br/><br/>
    <label>Enter password</label>
    <input type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/><br/><br/>
    <button onClick={postData}> Add New User </button>
    </form><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div> 
)
}
