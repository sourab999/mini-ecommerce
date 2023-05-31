import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineShoppingCart} from 'react-icons/ai'


export const Navbar = ({cart}) => {
  return (
    <div className='navbar'>
<Link to='/' ><div className='logo'><span className='club' >Club</span><span className='house'>house</span></div></Link>

<Link to='/cart' ><div className='nav-links'>{cart}</div> 

<div className='nav-links2'>  <AiOutlineShoppingCart color='black' size={60}/>   </div>  
   </Link>
    </div>
  )
}
