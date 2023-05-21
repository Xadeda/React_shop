import React from 'react'
import { useNavigate } from 'react-router-dom'
import ShoppBag from '../ShoppBag/ShoppBag'
import './Item.css'
function Item(props) {
  const {onAdd } = props
  // console.log(onAdd);
const navigate = useNavigate()
  return (
    <div className='itemDiv'>
      <div className='itemDivProduct'>
        <img src={props.image} className='productImg' alt="image" /> 
        <h5 
        style={{fontSize: '25px'}}
        >{props.title}</h5>
        <p>{props.price} € </p><br/>
        <button className='button' onClick={() => navigate(props.id)}>
        <span></span> <span></span><span></span><span></span>
          See More</button>
          <button className='button' onClick={() => onAdd(props.onAdd)}>
        <span></span> <span></span><span></span><span></span>
          Add To Cart</button>
      </div>
    </div>
  )
}

export default Item






