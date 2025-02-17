import React, { createContext, useState } from "react";
import { useEffect } from "react";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [products,setproducts]= useState([])
    const [total,settotal]= useState(0)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(res => res.json())
        .then(json => { const update = json.map((jso) => ({ ...jso, quantity: 1 })) 
        setproducts(update)})

    }, [])

    const addToCart = (pro) => {
        setCart([...cart, pro]);
    };

    const totalprice = ()=>{
        let tot = 0
        cart.map((car)=>tot+=car.price * car.quantity)
        settotal(tot)
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const increaseQuantity = (id) => {
        setCart(cart.map(item => 
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      };
    
      // Decrease Quantity Function
      const decreaseQuantity = (id) => {
        setCart(cart.map(item => 
          item.id === id && item.quantity > 1 ? 
            { ...item, quantity: item.quantity - 1 } : item
        ));
      };

    return (
        <CartContext.Provider value={{products, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity,totalprice,total  }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
