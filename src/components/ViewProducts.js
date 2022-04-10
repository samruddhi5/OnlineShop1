import React, { Component } from 'react'
import axios from 'axios';
export default class ViewProducts extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    //     this.state = { productavailable: [] };
    //     fetch("http://localhost:3000/cakedata")
    //       .then((response) => response.json())
    //       .then(
    //         (productavailable) => (
    //           console.log(productavailable), this.setState({ productavailable })
    //         )
    //       );
    //   }
    
    //   handleOrderSelect = (available) => {
    //     console.log(available);
    
    //     this.props.history.push({
    //       pathname: `/payment`,
    //       state: { cake: available },
    //     });
    
        
    //   };
    
    //   render() {
    //     return (
    //       <div>
    //         <br />
    //         <h1 className="text-secondary text-lg-center"> Products Available </h1>
    //         <br />
    //         <br />
    //         <br />
    //         <table className="table table-striped table text-danger border" border="1">
    //         <thead>
    //                   <tr>
    //                          <th>Product Id</th>&nbsp;&nbsp;
    //                          <th>Product Name</th>&nbsp;&nbsp;
    //                          <th>Product Price</th>&nbsp;&nbsp;
    //                          <th>Product Quantity</th>&nbsp;&nbsp;
    //                           <th>Product Image</th>&nbsp;&nbsp;
    //                          </tr></thead>
    //           <tbody>
    //             {this.state.cakesavailable.map((available) => (
    //               <tr key={available.cakeId}>
    //                 {/* <td className="text-primary text-center">{available.cakeid}</td> */}
    //                 <td className="text-warning text-center">{available.name}</td>
    //                 <td className="text-info text-center">{available.category}</td>
    //                 <td className="text-danger text-center">{available.weight}</td>
    //                 <td className="text-info text-center">{available.price}</td>
    //                 <td>
    //                   <button
    //                     className="btn btn-warning"
    //                     onClick={() => this.handleOrderSelect(available)}
    //                   >
    //                     PlaceOrder
    //                   </button>
    //                 </td>
    
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //         <br /> <br /> <br /> <br />
    //         <br /> <br /> <br /> <br /> <br /> <br />
    //       </div>
    
    constructor(props) {
        super(props);
        this.state = {
            product: []
            }
    }
    
componentDidMount() {
    
    // productservice.getproduct ()
    axios.get('http://localhost:8080/api/product/fetchAll').then(response => {
    console.log(response);    
    this.setState({ product: response.data });
        })   
    }
     
    render() {
        return (
            <div>
                <h1 className='text-center'>Product List Page</h1>
                <form >
                <div className='row'>
                    <table className='' border="1">
<thead>
    <tr>
        
        <th>Product Name</th>
        <th>Product Price</th>
              <th>Product Image</th>
        <th>Product Quantity</th>
</tr></thead>
<tbody>
    {
        this.state.product.map(product => 
    // <tr key={product.id}></tr>
    <tr >
        <td>{product.productName}</td>
        <td>{product.price}</td>
               <td><img src={product.image} alt="product"/></td>
        <td>{product.quantity}</td>
          </tr>  )}
          </tbody>
                    </table>
            </div>
            <div>
             <a href='/Bill'><button>Go to payment</button></a>
             </div><br/><br/><br/><br/><br/><br/><br/><br/></form>
<br/><br/><br/><br/><br/><br/><br/><br/>             

            </div>         )
     }
}
