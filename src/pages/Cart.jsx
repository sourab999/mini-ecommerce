import React from 'react'
// import {IoTrashBinOutline} from './react-icons/io'
// import { IoTrashBinOutline } from "react-icons/ai";
import { AiFillAccountBook } from 'react-icons/ai';
import {BiTrash} from 'react-icons/bi'
export const Cart = ({cart,setCart}) => {

  const getTotalSum = () => {
    return cart.reduce(
      (sum, {price, quantity }) => sum +price * quantity,
      0
    );
  };
  
  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (<>
  <div className='cart'>
      <p className='cart-checkout'>Checkout</p>
      <p className='cart-items'>Total Items in cart :{cart.length}</p>
         <div className='cart-center'> 
      <div className='cart-flex'>
      <div className='cart-flex2'>
      {cart.map((product,id)=>(
    <div className='cart-product' key={id}>
      <div className='cart-flex3'>
<div className='cart-image1' ><img className='cart-image2' src={product.image}/></div>
<div className='cart-inside'  >
<p className='cart-title' >{product.title}</p>
<p className='cart-quantity' >x{product.quantity}</p>
<p className='cart-price'>Amount:Rs {product.price * product.quantity}</p>
<button className='cart-remove' onClick={() => removeFromCart(product)}><BiTrash/></button>
</div>
    </div>
    </div>
    )
    )}
    </div>
    <div>
    <div className='cart-order'>
      <div className='cart-total' >Total Amount of the items:</div>
    <div className='cart-amount'><span className='cart-amount2'>Amount: Rs</span>{getTotalSum()}</div>
    <button className='cart-clear' onClick={clearCart}>Clear Cart</button>
    </div>
    </div>
    </div>
    </div>
    </div>


    </>
  )
}

