import React from 'react'
import { useNavigate } from 'react-router-dom'
import './GalleryImg.css'
function GalleryImg(props) {
  // console.log(props.image);
    const navigate = useNavigate()
  return (
    <div className='galleryImgDiv'>
         <img className='galleryImg'  src={props.image} />
    </div>
  )
}

export default GalleryImg