import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ShoppBag from '../ShoppBag/ShoppBag'
import './Nav.css'
function Nav(props) {
  const {countCartItems} = props
  const [openCart, setOpenCart] = useState(false)
  // console.log(countCartItems);
  return (
    <div className='navDiv'>
      <nav className='nav'>
         <ul className='navUl'>
            <li><NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/'>Home</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/contact'>Contact</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/about'>About</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/productsItem'>Shop</NavLink></li>
            <li><NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/gallery'>Gallery</NavLink></li>  

      <div className='navBagDiv' onClick={() => setOpenCart(!openCart)}>
      BAG
        {
            countCartItems ? (<button className='badge'>{countCartItems}</button>):
            (''
            )}
      </div>{' '}
         </ul>
      </nav>
      {openCart && <ShoppBag/>}
    </div>
  )
}

export default Nav