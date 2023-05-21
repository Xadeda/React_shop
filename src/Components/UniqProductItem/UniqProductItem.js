import React, { useEffect, useState } from 'react'
import './UniqProductItem.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
function UniqProductItem({itemInfo}) {

    const {id} = useParams()
    const [currentProduct, setCurrentProduct] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
      if (itemInfo.some(e => e.id === id)) {
        setCurrentProduct({
          ...itemInfo.find(el => el.id === id)
        })
      }else{
        Promise.all([
          axios.get('https://fakestoreapi.com/products/' + id),
        ]).then(([{data: postsData}]) =>{
                setCurrentProduct({
                  id: postsData.id.toString(),
                  description: postsData.description,
                  image: postsData.image,
                  title: postsData.title,
                  price: postsData.price,
                  category: postsData.category,
                })
              })
      }     
    }, [] )
 

  return (
    
      <div className='uniqProductItem'>
           <div className='info'>
           <img src={currentProduct?.image} className='uniqImg' alt="image" /> 
             <h2>{currentProduct?.title}</h2>
             <h3>{currentProduct?.category}</h3>
             <p>{currentProduct?.descripttion}</p>
             <p>{currentProduct?.price}0 €</p>
           </div><br /><br />
        <button className='button'>
          
        <span></span> <span></span><span></span><span></span>
          Add To Cart</button>
    </div>
  )
}

export default UniqProductItem





