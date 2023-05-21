import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
function Header() {
  const navigate = useNavigate()
  return (
    <div className='headerDiv'>
      <div className='divLeft'>
      <h1>Select Your New <br/>
          Perfect Style
      </h1>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
      <button onClick={() => navigate('/productsItem')} className='button'>
          <span></span> <span></span><span></span><span></span>
          Shop Now
      </button>
      </div>
      <div className='divRight'>
       <img id='img'  src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" alt="wotchimg" />
      </div>
    </div>
  )
}

export default Header