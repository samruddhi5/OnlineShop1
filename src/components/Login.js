import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
//import {useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import Product from './Product';

export default function Login(){

  const [user,setUser]=useState({"email":"","password":""});
const navigate=useNavigate();
  //const [user,setUser]=useState({"name":"","address":"","email":"aa@gmail.com","password":""});  
  //const history=useHistory();
  // useEffect(()=>{
  //   axios.get('http://localhost:8080/api/customer/details').then(response => {
  //     console.log(response);
  //     setUser(response.data)
  //   })
  // },[])
  
  const authenticateUser=(e)=>
    //setUser({...user,[e.target.name]:e.target.value})
      // const saveuser=e=> {
    //   if(user.email==="aa@gmail.com" && user.password==="123"){
    //     setUser1(user)
    //     console.log(user1)
    //     localStorage.setItem('user',JSON.stringify(user1))
    //     alert("Login Successfully")
//        useNavigate('/Product')
    {
  e.preventDefault()
     console.log(user);
     
     axios.post('http://localhost:8080/api/customer/login',user)
     .then(Response=>{
       console.log(Response);
       if(Response.data.message==="User authenticated"){
         localStorage.setItem("user",JSON.stringify(Response.data.user));
          alert("Login Successfully");
          setUser(user);
          debugger;
          if(Response.data.user.role==="admin"){
          navigate('/Product')
        }else {navigate('/ViewProduct')
      }
    }
       else{
         alert("Invalid Credentials");
       }
     })
     .catch(error=>
       {console.log(error);
       })
 }
  return(
    <div >
      <br/><br/><br/><br/><br/><br/><br/><br/>
      <h2>Login</h2>
      
    <form className='form-group' border="1" style={{ backgroundColor: "burlywood" }} >        
    
    {/* <input type="text" value={user.address} onChange={(e)=>setUser({...user,address:e.target.value})}/><br/><br/> */}

      <label >Email</label>
      <input type="email" value={user.email} onChange={(e)=>setUser({...user,email: e.target.value})} /><br/><br/>
      <label >Password</label>
      <input type="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}/><br/><br/>
      <button onClick={authenticateUser}>Submit</button>
      </form>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}
