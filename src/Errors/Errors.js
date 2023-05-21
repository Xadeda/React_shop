import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Errors.css'
function Errors() {
  const navigate = useNavigate()
  return (
    <div className='errorDiv'>
      <h1>Ooops!</h1>
      <h4>404-PAGE NOT FOUND</h4>
      <p>The page you are looking for migt have beeen removed <br />
          hab its name changed or is temporiary unavailable
      </p><br />
      <button className='button'onClick={() => navigate('/')}>Go to Homepage</button>
    </div>
  )
}

export default Errors