import React from 'react'
import { Link } from 'react-router-dom'
export const User = ({product,addToCart}) => {
    const { id, image,title,price,category} = product
  return (
<div className='products-shadow' >
<Link  to={`/products/${id}`}>
<div className='center-products'>
<img className='img' src={image}/>
<div className='products-height' >
<p className='products-cateogory'>{category}</p>
<p className='products-title'>{title}</p>
<p className='products-price'>Rs {price}/-</p>
</div>
</div>
 </Link>
 {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}

 </div>

  )
}
