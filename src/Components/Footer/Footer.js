import React from 'react'
import './Footer.css'
import QuickLinks from '../QuickLinks/QuickLinks'
import FooterIcons from '../FooterIcons/FooterIcons'
import NewProducts from '../NewProducts/NewProducts'
import Support from '../Support/Support'
function Footer() {
  return (
    <div className='footerDiv'>
      <div className='footerObenDiv'>
        <NewProducts/>
        <QuickLinks/>
        <Support/>
      </div>
        <div className='footerUntenDiv'>
          <FooterIcons/>
        </div>
    </div>
  )
}

export default Footer