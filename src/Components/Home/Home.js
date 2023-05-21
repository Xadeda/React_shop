import React from 'react'
import NewArrivals from '../../NewArrivals/NewArrivals'
import Header from '../Header/Header'
import './Home.css'

function Home(props) {

  return (
    <div>
       <Header/>
        <div className='h1' >
          <h1>New Arrivals</h1>
        </div>
       <NewArrivals newArrivals={props.newArrivals}/>
    </div>
  )
}

export default Home