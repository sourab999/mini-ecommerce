
import React, { useEffect, useState } from "react"
import {  useParams } from 'react-router-dom'

export const SingleProduct = ({setCart,cart}) => {
  const {id}=useParams();

  const [product, setUsers] = useState([])

  const addTCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.id === item.id
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };
  useEffect(()=>{
    const fetchProduct=async()=>{
    const response=await fetch(`https://fakestoreapi.com/products/${id}`)
    const data=await response.json()
    console.log(data)
    setUsers(data)
    
    }
    fetchProduct()
    
    },[])
     


  return (<>
<div className="single-center">
  <div className="single-flex">
<div><img className="single-image" src={product.image} /></div>
<div>
<p className="single-title">{product.title}</p>
<p className="single-category" >{product.category}</p>
<p className="single-price"> <span className="single-price2">Price:Rs</span> {product.price}/-</p>
{/* <p>{product.rating}</p> */}
<p className="single-description">Description</p>
<p className="single-description2">{product.description}</p>

<button className="add" onClick={() => addTCart(product)}>Add to Cart</button>


</div>
  </div>
  </div>
  
  </>

  )
}
