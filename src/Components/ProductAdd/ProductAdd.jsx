import React from 'react'
import styled from 'styled-components';



const productAdd = ({productTime, handleAddProduct}) => {


    return (
        <SectionProduct >
            {productTime.map((productTime)=>(
                <Card key={productTime.id}>
                    <div>
                        <img src={productTime.image} alt="img...." />
                    </div>
                    <div>
                        <div>
                            <h3>{productTime.title}</h3>
                        </div>
                        <div>
                            <p>$ {productTime.price}</p>
                        </div>
                        <div >
                            <button onClick={()=>handleAddProduct(productTime)}>Add To Cart</button>
                        </div>
                    </div>
                </Card>
            ))}
        </SectionProduct>
    )
}

export default productAdd;
//styled-components
const SectionProduct = styled.div`
width: 80%;
padding-top:25px ;
@media (max-width: 530px){
    padding-top: 10%;
}
@media (max-width: 404px){
    padding-top: 20%;
}

margin:  auto;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;
const Card = styled.div`
width: 300px;
height: 400px;
padding: 10px;
margin :7% 20px;
text-align: center;
@media (max-width: 416px){
    padding: 0 !important;
    margin :0 ;
}
@media (max-width: 530px){
    height: auto;
}
@media (max-width: 768px){
    height: auto;
}
img{
    width: 100%;
    object-fit: cover;
    max-width: 300px;
    min-height: 400px;
}
button{
    padding: 5px 20px;
    font-weight: 700;
    font: 18px;
    background-color: transparent;
    border:1px solid red;
    cursor: pointer;
    margin: 10px 0;
}
`;