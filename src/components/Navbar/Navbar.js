import './Navbar.css'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Button from '../Button/Button'
import { link} from 'react-router-dom'
const Navbar = () => {

    const text = 'hice click'

    const handleClick = () => {
        console.log(text)
    }

return (
        <nav className="Navbar">
            <div>
                <link to='/'>Ecommerce</link>
            </div>
            <div>
            
                <link to='/cartegory/celular' label='celulares' handleClick={handleClick} color='red'></link>
                <link to='/cartegory/tablet' label='tablets' handleClick={handleClick} color='red'></link>
                <link to='/cartegory/notebook' label='nootbooks' handleClick={handleClick} color='red'></link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar