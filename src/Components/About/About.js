import React from 'react'
// import JsonApi from '../JsonApi/JsonApi'
import AboutSeqSys from '../AboutSeqSys/AboutSeqSys'
import './About.css'
function About() {
  return (
    <div className='aboutDiv'>
      <div className='divH1'>
      <h1>About Us</h1>
      </div>
      <div className='aboutText'>
        <h4>Our Mission</h4> <br />
        <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
        Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
        </p> <br />
        <h4>Our Vision</h4> <br />
        <p>Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
        Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan.
       </p> <br />
      </div>
      <div className='aboutVideo'>
        
      
       {/* <iframe id='video'  src="https://www.youtube.com/embed/ow_papkKgm4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
             
       </div>
       <AboutSeqSys/>
       {/* <JsonApi/> */}
    </div>
  )
}

export default About