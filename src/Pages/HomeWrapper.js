import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'

function HomeWrapper(props) {
  const {countCartItems} = props
  // console.log(countCartItems);
  return (
    <div>
      <Nav countCartItems={countCartItems}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default HomeWrapper