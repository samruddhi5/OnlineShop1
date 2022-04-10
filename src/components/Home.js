import React from 'react'
// import Product from  "./components/Product";
export default function Home() {
  return (
    <div>
<header>
  <nav style={{ backgroundColor: "pink" }} align="left">
    <a href="/Home">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/Login">Login</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/Register">Register New User</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/ViewProducts">View All Products</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href='/Product' >Add New Product</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/About">About</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="/ContactUs">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;
    </nav>
</header>

{/* <nav class="navbar fixed-top navbar-light bg-light" style={{ backgroundColor: "pink" }} align="right">
  style={{display:"none"}}
<Nav.Link href="/Home">Home</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav.Link href="/Login">Login</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav.Link href="/Register">New User Registration</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav.Link href="/Product">View Products</Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
        </nav> */}
    <marquee loop='0' speed='20'>
      <img
              className="mb-4"
              src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_800/https://welpmagazine.com/wp-content/uploads/2020/10/Dairy-products.jpg"
              // src="https://loveenglish.org/wp-content/uploads/2020/06/Dairy-Products-1.jpg"
              alt="logo"
              width="700px"
              height="400px"
              style={{  backgroundImage : "75%" }}/>
              <img
              className="mb-4"
              src="https://www.foodsafetynews.com/files/2021/06/illustration-milk-in-glass-825x468.jpg"
                           alt="logo"
              width="700px"
              height="400px"
              style={{  backgroundImage : "75%" }}/>
              <img
              className="mb-4"
              src="https://media.gettyimages.com/photos/eight-ice-cream-cones-picture-id165933299?s=612x612"
              alt="logo"
              width="700px"
              height="400px"
              style={{  backgroundImage : "75%" }}/>
              <img
              className="mb-4"
              src="https://5.imimg.com/data5/SELLER/Default/2021/9/BB/PS/IJ/2078356/fresh-paneer-1kg-pack-500x500.jpg"
              // src=""
              alt="logo"
              width="700px"
              height="400px"
              style={{  backgroundImage : "75%" }}/>
              
              <img
              className="mb-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONt5ASbS9D-Ofaa7es_Q0mtsQ2H4oqj_Pww&usqp=CAU"
              // src=""
              alt="logo"
              width="700px"
              height="400px"
              style={{  backgroundImage : "75%" }}/>
              
             </marquee> 
             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
  )
}
