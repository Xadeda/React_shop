import React from 'react'
import './ContactMessige.css'
function ContactMessige() {
    const  handleSubmit = (e) =>{
            e.preventDefault()
    }
  return (
    <div className='contactMessige'>
        <div className='formDiv'>
        <h3>Get in Touch</h3>
        <form onSubmit={handleSubmit}>
            <textarea name="" id="" cols="85" rows="10" placeholder='enter Messige'></textarea>
            <input className='inputT' type="text"  placeholder='enter your name' />
            <input className='inputT' type='email'  placeholder='enter your email' />
            <input type="button" className='btn' value="Send" />
        </form>
        </div>
        <div className='iconDiv'>
            <h5>Buttonwood, California. </h5>
            <p>Rosemead, CA 91770</p><br />
            <h5>+1 253 565 2365</h5>
            <p>Mon to Fri 9am to 6pm </p><br />
            <h5>support@colorlib.com</h5>
            <p>Send us your query anytime!</p><br />
        </div>
    </div>
  )
}

export default ContactMessige