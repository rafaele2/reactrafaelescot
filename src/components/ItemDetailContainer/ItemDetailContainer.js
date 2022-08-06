import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState() 
  const {productId} = useParams ()
    

    useEffect (() => {
      getProductsById (productId)
      .them (product => {
        setProduct(product)
      })
      .catch (error => {
          console.log (error)
      })
    }, [])
    return (
        <div>
          <h1>Detalle</h1>  
          <ItemDetail {...product}/>         
        </div>
    )
}
export default ItemDetailContainer