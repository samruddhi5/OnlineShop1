import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
export default function Bill() {
    
     const caluculate=(e)=>{
         var total=0;
         var quantity,rate=0;
         var key=("input[type='checkbox']").val();
         switch (key) {
             case "item1":
                 rate=15;
                 break;
                 case "item2":
                     rate=20;
                     break;
                     case "item3":
                 rate=25;
                 break;
                 case "item4":
                 rate=30;
                 break;
                 }
                       total=rate*quantity.value;
                       alert("Total Amount is :");
                       <Link to="/Logout"></Link>

    
}

  return (
    <div><h1>Bill Payment</h1>
<h6>Select your items</h6>
<form onClick={caluculate}>
    
    <input type="checkbox" name="item1" value="item1"/>
    <label for="item1">Ice Cream</label><br/>
    <input type="checkbox" name="item2" value="item2"/>
    <label for="item2">Cheese</label><br/>
    <input type="checkbox" name="item3" value="item3"/>
    <label for="item3">Paneer</label><br/>
    <input type="checkbox" name="item4" value="item4"/>
    <label for="item4">Curd</label><br/>

    <textarea name="quantity" value=""/><br/>
    <button type="submit" >Calculate</button>
    
</form><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  )
}