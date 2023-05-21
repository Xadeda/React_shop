// import React from 'react'
// import  './Timers.css'
// import { useState, useEffect } from 'react';
// function Timers() {
//   const [seconds, setSeconds] = useState(0)
//   const [counter, setCounter] = useState(10);
	
//     const [data, setData] = useState(true)
    
//   useEffect(() => {
  
//     const interval = setInterval(() => {

//        if(data ){
//           setSeconds(seconds => seconds + 1
//       );
//       setCounter(counter => counter - 1
//         )

//     } 
//     }, 1000)
//     return () => clearInterval(interval)
//   }, [data])

//   return (
//     <div className="timersDiv">
//       <div>
//         <div className='box' style={{display: `${data ? 'flex' : 'none'}`}}>
//           <em className="second" style={{display: `${data ? 'inline' : 'none'}`}}>{seconds <= 5 ? seconds : 5}</em>
//         </div>

//            <span className='span2' onClick={(e) => setData(e.target.data === 0)} style={{display: `${(counter < 0 && data) ? 'inline' : 'none'}`}}>X</span>
//            <h3 className='h3'  style={{display: `${(seconds >= 5 && data)? 'inline' : 'none'}`}}>Այստեղ կարող է լինել ձեր գովազդը</h3>

//         <div className='clock' style={{display: `${(seconds >= 5 && data) ? 'inline' : 'none'}`}}>
//            <h1 className='cancel' style={{display: `${(seconds >= 5 && counter >= 0) ? 'inline-block' : 'none'}`}}>   Դուք կարող եք անջատել գովազդը {counter}  վայրկյան հետո</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Timers
