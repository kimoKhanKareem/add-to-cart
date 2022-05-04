import React, { useState } from "react";
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from "./Home/Home";
import data from "./Components/Data/Data";

function App() {
  const {productTime} = data;
  const [cartItems, setCartItems] = useState([]);
  //Add Cart from click
  const handleAddProduct=(productTime) =>{
    const productEx = cartItems.find(item => item.id === productTime.id);
    if(productEx){
      setCartItems(cartItems.map(item => item.id === productTime.id ?
      {...productEx, quantity : productEx.quantity + 1}: item)
      );
      }else{
        setCartItems([...cartItems, {...productTime, quantity: 1}])
      }
  };
  // remove product from click
  const handleRemoveProduct = (productTime) =>{
    const productEx = cartItems.find((item)=> item.id === productTime.id);
    if(productEx.quantity === 1){
      setCartItems(cartItems.filter((item)=> item.id !== productTime.id))
    }else{
      setCartItems(
        cartItems.map((item)=> item.id === productTime.id ? 
        {...productEx, quantity: productEx.quantity -1 }:item
        ))
    }
  };
  //clear all product
  const handleCartClear = () =>{
    setCartItems([]);
  }
  return (
    <div className="App">
      <Router>
        <Navbar cartItems={cartItems}/>
        <Home 
         productTime = {productTime} 
         cartItems={cartItems}
         handleAddProduct={handleAddProduct}
         handleRemoveProduct={handleRemoveProduct}
         handleCartClear={handleCartClear}
         />
      </Router>

    </div>
  );
}
export default App;