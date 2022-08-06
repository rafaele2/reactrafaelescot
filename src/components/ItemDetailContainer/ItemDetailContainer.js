import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState() 
    useEffect (() => {
      getProductsById ('1')
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