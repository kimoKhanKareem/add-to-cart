import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = ({cartItems}) => {
  return (
    <Section>
      <Logo>
        <h2>
          <Link to="/">T&C</Link>
        </h2>
      </Logo>
      <Right>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Video</Link>
          </li>
        </ul>
      </Right>
      <Left>
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-user"></i>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span>
                
                {cartItems.length === 0 ? "0" : cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </Left>
    </Section>
  );
};
export default Navbar;
//styled components
const Section = styled.div`
position: fixed;
background-color: red;
width: 100%;
height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const Logo = styled.div`
  h2 {
    a {
      text-decoration: none;
      font-size: 35px;
      color: white;
    }
  }
`;
const Right = styled.div`
  ul {
    display: flex;
    text-decoration: none;
    li {
      a {
        text-decoration: none;
        padding: 0 15px;
        font-size: 19px;
        color: white;
      }
      list-style: none;
    }
  }
  @media (max-width: 595px){
    ul{
      display: none;
    }
}

`;
const Left = styled.div`
  display: flex;
  ul {
    display: flex;
    text-decoration: none;
    li {
      list-style: none;
      a {
        text-decoration: none;
        padding: 0 15px;
        font-size: 18px;
        i{
          color: white;
        }
        span{
          padding: 0 3px;
          color: white;
        }
      }
    }
  }
`;
