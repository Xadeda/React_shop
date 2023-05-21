import React from 'react'
import './FooterIcons.css'
function FooterIcons() {
  return (
    <div className='footerIcons'>
        <div className='text'>
            <p>Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
        </div>
        <div className='icon'>
        <i id='fa' className="fa-solid fa-globe"></i>
        <i id='fa' className="fa-brands fa-facebook-f"></i>
        <i id='fa' className="fa-brands fa-twitter"></i>
        </div>
    </div>
  )
}

export default FooterIcons