import React from 'react';
import ProductAdd from '../Components/ProductAdd/ProductAdd';
import {Routes,Route } from 'react-router-dom';
import Cart from '../Components/Cart/Cart';





const Home = ({ productTime, cartItems, handleAddProduct, handleRemoveProduct, handleCartClear }) => {

    return (
        <div>
        <Routes>
          <Route path="/" exact element={<ProductAdd  productTime = {productTime}   handleAddProduct={handleAddProduct}/>} />
          <Route path="/about" exact element={< Home />} />
          <Route path="/contact" exact element={< Home />} />
          <Route path="/video" exact element={< Home />} />
          <Route path="/user" exact element={< Home />} />
          <Route path="/cart" exact element={< Cart
           cartItems={ cartItems }
           handleAddProduct={handleAddProduct}  
           handleRemoveProduct={handleRemoveProduct} 
           handleCartClear={handleCartClear} />}
           />
        </Routes>
        </div>
    )
}
export default Home
