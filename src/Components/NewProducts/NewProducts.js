import React from 'react'
import './NewProducts.css'
import { NavLink } from 'react-router-dom'
function NewProducts() {
  return (
    <div className='newProductsDiv'>
        <h4>New Product</h4>
        <br />
        <NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/'>Woman Cloth</NavLink><br />
        <NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/'>Fashion Accessories</NavLink><br />
        <NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/'>Man Accessories</NavLink><br />
        <NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/'>Woman Cloth</NavLink>    
    </div>
  )
}

export default NewProducts