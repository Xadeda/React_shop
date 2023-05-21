import React from 'react'
import GalleryItems from '../GalleryItems/GalleryItems'
function Gallery(props) {
    
  return (
   <div>
     <GalleryItems  itemInfo={props.itemInfo} setItemInfo={props.setItemInfo}/>
   </div>
  )
}

export default Gallery