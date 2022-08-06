
import {link} from 'react-router-dom'

const Item = ({product}) => {
    return (
        <li>
            <h3>{product.name}</h3>
            <img src={product.img} alt={product.name}/>
            <link to= {`/detail/${id}`} className='Option'>Ver detalle</link>
        </li>
    )
}

export default Item