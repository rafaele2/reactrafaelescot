import './Navbar.css'
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Button from '../Button/Button'
const Navbar = () => {

    const text = 'hice click'

    const handleClick = () => {
        console.log(text)
    }

return (
        <nav className="Navbar">
            <div>
                <h1>Ecommerce</h1>
            </div>
            <div>
                
                <Button label='celulares' handleClick={handleClick} color='red'/>
                <Button label='tablets'color='blue'/>
                <Button label='notebooks'color='green'/>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar