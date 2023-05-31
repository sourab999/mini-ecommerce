
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Cart } from './pages/Cart'
import { SingleProduct } from './pages/SingleProduct'
import { Products } from './components/products'
import { useState } from 'react'
import { Footer } from './components/Footer'
import { Notfound } from './pages/Notfound'

function App() {

 const[cart,setCart]=useState([]) 

 const getCartTotal = () => {
  return cart.reduce(
    (sum, { quantity }) => sum + quantity,
    0
  );
};
 
  return (
    <>
   <Navbar cart={getCartTotal()} />
   <Routes>
<Route path='/' element={<Products cart={cart} setCart={setCart}/>} exact/>
<Route  path='/products/:id'  element={<SingleProduct cart={cart} setCart={setCart}  />} />
<Route path='/cart' element={<Cart  cart={cart} setCart={setCart}  />}/>
<Route path='*' element={<Notfound/>}/>
 </Routes>
 <Footer/>
    </>
  )
}

export default App
