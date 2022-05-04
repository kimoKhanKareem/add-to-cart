import React from 'react'
import styled from 'styled-components'



const Cart = ({cartItems,handleAddProduct, handleRemoveProduct, handleCartClear}) => {
    const totalPrice = cartItems.reduce(
        (price, item)=> price + item.quantity*item.price,
        0);
    return (
        <SectionCart>
            <h3>
                Cart Items
            </h3>
            <div className="clearbutton">
                {cartItems.length >=1 && (
                    <button onClick={ handleCartClear}>Remove All</button>
                )}
            </div>
            {cartItems.length === 0 && (
                <h3>No items are Added.</h3>
            )}
            <CartItem>
                {cartItems.map((item)=>(
                    <div key={item.id}>
                        <img src={item.image}
                        alt="..." 
                        />
                        <h3>{item.title}</h3>
                        <p>$ {item.price}</p>
                        <button onClick={()=> handleAddProduct(item)}>
                            +
                        </button>
                        <button  onClick={()=> handleRemoveProduct(item)}>
                            -
                        </button>
                        <div className="count">
                            {item.quantity} * $ {item.price}
                        </div>
                    </div>
                ))}
                <TotalPrice >
                    total price
                    <div>
                        $ {totalPrice}
                    </div>
                </TotalPrice>
            </CartItem>
        </SectionCart>
    )
}
export default Cart
//styled-components
const SectionCart =styled.div`
padding-top: 10%;
@media (max-width: 1366px){
    padding-top: 10%;
}
@media (max-width: 1200px){
    padding-top: 10%;
}
@media (max-width: 1024px){
    padding-top: 12%;
}
@media (max-width: 768px){
    padding-top: 14%;
}
@media (max-width: 576px){
    padding-top: 25%;
}
@media (max-width: 480px){
    padding-top: 25%;
}
@media (max-width: 425px){
    padding-top: 25%;
}
@media (max-width: 320px){
    padding-top: 30%;
}

text-align: center;
.clearbutton{
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    button{
        padding: 10px;
        cursor: pointer;
        margin-right: 20px;
        border: 1px solid red;
    }
}
h3{
    padding: 10px 0;
}
`;
const CartItem = styled.div`
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 150px;
            border: 1px solid red;
            margin-bottom:5px ;
        }
        h3{
            padding: 0 20px;
        }
        p{
            padding: 0 20px;
            font-size: 20px;
        }
        button{
            padding: 5px 10px;
            margin: 0 5px ;
            border: 1px solid red;
            background-color: transparent;
            cursor: pointer;
        }
        .count{
            padding: 0 10px;
            font-size: 18px;
        }
    }
`;
const TotalPrice = styled.div`
font-size: 24px;
`;