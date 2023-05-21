import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Item from '../Item/Item'
import Loading from '../Loading/Loading'
import './ProductItem.css'
const ProductItem = ({itemInfo, setItemInfo,cartItems,onAdd ,onRemove}) => {
  // console.log(itemInfo);
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState('')

    useEffect(() => {
      Promise.all([
        axios.get('https://fakestoreapi.com/products'),
      ]).then(([{data: postsData}]) => {
        const data = postsData.map(e => ({
          id: e.id.toString(),
          title: e.title,
          image: e.image,
          price: e.price,
          
        }))
        // console.log(postsData);
          setItemInfo([...data])
      })
      .catch(err => {
        setErr(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
    }, [])


    //  useEffect(() =>{
    //     if (istFetching && (totalCount / 20 >= page || totalCount === 0)) {
    //         axios.get('https://fakestoreapi.com/products',{
    //             params: {
    //                 _limit: 20,
    //                 _page: page
    //             }
    //         })
    //             .then((response) =>{
    //                 setTotalCount(response.headers['x-total-count'])
    //                 setPosts([
    //                     ...posts,
    //                     ...response.data,
    //                     setItemInfo([...data])
    //                 ])
    //                 setIstFetching(false)
    //                 setPage(page + 1)
    //             }).catch(err =>{
    //                        setErr(err.message)
    //                      })
    //                      .finally(() =>{
    //                        setLoading(false)
    //                    })  
    //     }
    //  } , [istFetching])

  
    return (
            <div className='productItem'>
            <div  className='productItemH1'>
              <h1>Watch Shop</h1>
            </div>
            <div className='watch'>
             {loading ?
              <Loading/>
               :
               err ?
                  <h1 style={{color: 'red'}}>{err}</h1>
                :
                itemInfo.map(e => <Item key={e.id}  id={e.id}  price={e.price}  title={e.title} image={e.image} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>)
             }
      
            </div>
            
          </div>
        )
      }
      
      export default ProductItem



