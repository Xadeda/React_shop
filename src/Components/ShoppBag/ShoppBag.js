import React from 'react'
import './ShoppBag.css'
function ShoppBag({cartItems}) {
  // console.log(cartItems);

  return (
    <div className='bagDiv'>
        <h1>shopp bag</h1>
        {/* {cartItems.map((item) => (
          <div key={item.id}><img src={item.image} alt='image' /></div>))
        } */}
    </div>
  )
}

export default ShoppBag