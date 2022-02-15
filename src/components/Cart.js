import '../styles/Cart.css'
import { useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext'
import CartOpenContext from '../context/CartOpenContext'
import crossIcon from '../assets/cross.png'
import cart_pic from '../assets/cart.png'

function Cart() {
    const {cart, updateCart} = useContext(CartContext)
    const {className, changeClassName} = useContext(CartOpenContext)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
    useEffect(()=> document.title = `LMJ : ${total}€ d'achats`, [total])

    function removeItem({name, price, amount}) {
        const cartFilteredCurrentPlant = cart.filter(
            (plant) => plant.name != name
        )
        updateCart(
            amount == 1 ?  [...cartFilteredCurrentPlant] : [...cartFilteredCurrentPlant, { name, price, amount: amount - 1 }]
        )
    }
    
    return <div><div className='lmj-cart'>
        <div className={className}>
            {className ==='lmj-cart-open' ? (
            <div>
                {cart.length > 0 ? (
                    <div>
                        <h2>Panier</h2>
                        {cart.map(({name, price, amount}, index) => (
                            <div key={`${name}-${index}`}>
                                <button className='lmj-remove-button' onClick={()=>removeItem({name, price, amount})} >
                                    <img className='lmj-cross' src={crossIcon}/>
                                </button>
                                <span className='lmj-cart-upperCase'>{name}</span> {price}€ × {amount}
                            </div>
                        ))}
                        <h3>Total : {total}€</h3>
                        <button className='lmj-empty-cart' onClick={() => updateCart([]) }>Vider le panier</button>
                    </div>
                ) : (
                    <div>Votre panier est vide</div>
                )}
            </div>   
            ) : (
                <div>
                   
                </div>
            )}
        </div>
        {className ==='lmj-cart-open' ? (
            <button 
                className='lmj-cart-button' 
                onClick={() => changeClassName('lmj-cart-closed')}>
                <img className='lmj-img-cart-open' src={crossIcon}/>
            </button>
        ) : (
            <button onClick={()=>changeClassName('lmj-cart-open')}
                className='lmj-cart-button'>
                <img className='lmj-img-cart-close' src={cart_pic}/>
            </button>
        )}
    </div></div>
 }

export default Cart