import React, { useEffect, useState } from "react"
import { User } from "./User"
import { Banner } from "./Banner"
export const  Products = ({setCart,cart}) => {
  const [users, setUsers] = useState([])
  
  const fetchUserData = () => {
    fetch("https://fakestoreapi.com/products/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])

  const addToCart = (product) => {
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



  return (
 <>
<div>
  <Banner/>
</div>


 <div className="center">
<div className="full">

 {

  users.map((user,id)=>( <div  key={id} >
<User  product={user} addToCart={addToCart} />
 </div>
 )
  )
  
 }
  </div>
 
  </div>
 </>



  )
}

