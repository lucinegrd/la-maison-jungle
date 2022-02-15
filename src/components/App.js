import Cart from './Cart'
import ShoppingList from './ShoppingList';
import Banner from './Banner'
import Footer from './Footer';
import { useEffect, useState } from 'react'
import '../styles/Layout.css'
import CartContext from '../context/CartContext';
import CartOpenContext from '../context/CartOpenContext';

function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  const cartValue = {cart, updateCart}
  const [className, changeClassName] = useState('lmj-cart-open')
  const contextClassName = {className, changeClassName}
  useEffect(() => {localStorage.setItem('cart', JSON.stringify(cart))}, [cart])
  return (
    <CartContext.Provider value={cartValue}><CartOpenContext.Provider value={contextClassName}>
      <Banner/>
      <div className='lmj-layout-inner'>
        <Cart/>
        <ShoppingList/>
      </div>
      <Footer/>
      
      
    </CartOpenContext.Provider></CartContext.Provider>
    );
}



export default App;
