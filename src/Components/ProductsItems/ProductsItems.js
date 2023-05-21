import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
// import Timers from '../Timers/Timers'


function ProductsItems(props) {
  
// console.log(props.itemInfo);
  return (
    <div>
      {/* <Timers/> */}
      <ProductItem itemInfo={props.itemInfo} 
                    onAdd={props.onAdd} 
                    onRemove={props.onRemove}
                    setItemInfo={props.setItemInfo}
                    cartItems={props.cartItems}
                    />
    </div>
  )
}

export default ProductsItems
     