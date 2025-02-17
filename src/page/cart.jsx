import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/context'
import Card from '../component/card'
import Total from '../component/total';


const Cart = () => {
    const { total, cart, removeFromCart, increaseQuantity, decreaseQuantity, totalprice } = useContext(CartContext)

    useEffect(() => {
        totalprice();
    }, [cart]);

    return (
            <div className='cart'>
                {cart.map((pro) => (
                    <div key={pro.id} className='cart-item'>
                        <Card name={pro.title} image={pro.image} price={pro.price} button={'REMOVE FROM CART'} onclick={() => removeFromCart(pro.id)} />
                        <div className='quantity'>
                            <h1>QUANTITY</h1>
                            <button onClick={() => decreaseQuantity(pro.id)}>-</button>
                            <h1>{pro.quantity}</h1>
                            <button onClick={() => increaseQuantity(pro.id)}>+</button>
                        </div>
                    </div>
                ))}
                      <Total ttot={total} />
            </div>
    );
};



export default Cart