import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'><Link to='shop'><button  className='center'>SHOP-NOW</button></Link></div> 
  )
}

export default Home