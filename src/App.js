import React from "react";
import { Route,Routes,Redirect } from "react-router-dom";
import './App.css';

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Product from "./components/Product";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import ViewProducts from "./components/ViewProducts";
import About from "./components/About";
import NewProduct from "./components/NewProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/Logout";

function App() {
  const adminUser={email:"aartirakhe2006@gmail.com",password:"123"};
  return (
    <div className="App" style={{ backgroundColor: "burlywood" }}>
      
      <header style={{ backgroundColor: "cyan",align:"center" }}><h1 style={{color:"red"}}>Online Dairy Shop</h1></header>
      <Routes >
     
        <Route path="/" element={<Home />} />
        <Route path="Login"  element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Product" element={<Product />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="ViewProducts" element={<ViewProducts/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="NewProduct" element={<NewProduct/>}/>
        <Route path="/Logout" element={<ProtectedRoute><Logout/></ProtectedRoute>}/>

      </Routes>
<Footer/>
    </div>
  );
}

export default App;
