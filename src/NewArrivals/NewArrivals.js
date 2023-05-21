import React from 'react'
import './NewArrivals.css'
import NewArrivalsItems from '../Components/NewArrivalsItems/NewArrivalsItems'
function NewArrivals({newArrivals}) {
  return (
    <div className='newArrivals'>
     
        {
          newArrivals.map(e => <NewArrivalsItems key={e.id} id={e.id} price={e.price} img={e.img} name={e.title}/>)
        }
    </div>
  )
}

export default NewArrivals