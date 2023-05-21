import React from 'react'
import './QuickLinks.css'
import { NavLink } from 'react-router-dom'
function QuickLinks() {
  return (
    <div className='quickLinksDiv'>
    <h4>Quick Links</h4>
    <br />
    <NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='about'>About</NavLink><br />
    <NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/'>Offers & Discounts</NavLink><br />
    <NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/'>Get Coupon</NavLink><br />
    <NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='contact'>Contact Us</NavLink>    
</div>
  )
}

export default QuickLinks