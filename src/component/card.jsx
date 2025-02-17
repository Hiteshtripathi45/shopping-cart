import React from 'react'

const Card = ({ image, name, price,button,onclick,quani }) => {
    return (
        <div className='product'><div className='image'><img src={image} alt={name} /></div><h1 className='name'>{name}</h1><div className='add'><h2 className='price'>{price}</h2><button onClick={onclick}>{button}</button></div>{quani}</div>
    )
}

export default Card