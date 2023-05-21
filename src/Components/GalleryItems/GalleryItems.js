import React from 'react'
import axios from 'axios'
import './GalleryItems.css'
import Loading from '../Loading/Loading'
import { useEffect , useState} from 'react'
import GalleryImg from '../GalleryImg/GalleryImg'

function GalleryItems({itemInfo, setItemInfo}) {
  const [loading, setLoading] = useState(true)
    const [err, setErr] = useState('')
    useEffect(() => {
      Promise.all([
           axios.get('https://fakestoreapi.com/products'),
      ]).then(([ {data: photosData}]) =>{
          const data = photosData.map(el => ({
             id: el.id.toString(),
             image: el.image,
            
          }))
            // console.log(data);
            setItemInfo([...data])
      })
      .catch(err =>{
        setErr(err.message)
      })
      .finally(() =>{
        setLoading(false)
      })
    }, [])
  return (
    <div className='galleryItems'>
         {loading ?
        <Loading/>
         :
         err ?
            <h1 style={{color: 'red'}}>{err}</h1>
          :
        
          itemInfo.map(e => <GalleryImg key={e.id} image={e.image}/>)
        
       }
         
          
        
    </div>
  )
}

export default GalleryItems