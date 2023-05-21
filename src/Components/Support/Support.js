import React from 'react'
import './Support.css'
import { NavLink } from 'react-router-dom'
function Support() {
  return (
<div className='supportDiv'>
    <h4>Quick Links</h4>
    <br />
    <NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/'>Frequently Asked Questions</NavLink><br />
    <NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/'>Terms & Conditions</NavLink><br />
    <NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='/'>Privacy Policy</NavLink><br />
    <NavLink className={({isActive}) => isActive ? 'activeNav' : 'null'} to='contact'>Report a Payment Issue</NavLink>    
</div>
  )
}

export default Support