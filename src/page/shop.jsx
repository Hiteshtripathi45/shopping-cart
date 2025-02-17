import React, { useContext, useEffect, useState } from 'react'
import Card from '../component/card'
import { CartContext } from '../context/context'


const Shop = () => {
     const {products,cart,addToCart} = useContext(CartContext)

    return (
        <div className='shop'>
        {products.map((pro) => (<Card name={pro.title} image={pro.image} price={pro.price} button={'ADD TO CART'} key={pro.id} onclick={()=>addToCart(pro)} />))}
        </div>    
    )
}

export default Shop