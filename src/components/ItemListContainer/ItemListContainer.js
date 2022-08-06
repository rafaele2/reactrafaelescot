import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProductsDeAlfredo, getProductsByCategory } from '../../asyncMock'

import ItemList from '../ItemList/ItemList'
import{useParams} from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams ()

    useEffect(() => {
        if (!categoryId) {getProductsDeAlfredo().then(products => {
            setProducts(products)
        })
    }
        else (!categoryId) {getProductsByCategory( categoryId).then(products => {
            setProducts(products)
        })
    }
        
    }, [categoryId])

    // const productsComp = products.map(prod => <li key={prod.id}>{prod.name}</li>)
    return (
        <>
            <h1>{greeting}</h1>
            {/* <ul> */}
                {/* {productsComp} */}
                {/* {products.map(prod => <li key={prod.id}>{prod.name}</li>)}
            </ul>         */}
            <ItemList products={products}/>
        </>

    )
}

export default ItemListContainer