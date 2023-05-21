import React from 'react'
import './NewArrivalsItems.css'
function NewArrivalsItems(props) {
  return (
    <div className='itemDiv'>
    <div className='itemDivProduct'>
      <img className='image7'  src={props.img}/><br /><br />
      <h4>{props.name}</h4><br />
      <em>{props.price} $</em><br/>
    </div>
  </div>
  )
}

export default NewArrivalsItems