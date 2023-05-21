import React from 'react'
import ContactMessige from '../ContactMessige/ContactMessige'
import './Contact.css'
function Contact() {
  return (
    <div className='contactDiv'>
      <div className='h1div'>
        <h1>Contacts</h1>
      </div>
      <div className='mapsDiv'>
         <iframe className="gmap_iframe"     src="https://maps.google.com/maps?width=800&amp;height=400&amhl=en&amp;q=erevan&amp;t=&amp;z=10&  amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
         </iframe>
      </div>
      <ContactMessige/>
    </div>
  )
}

export default Contact