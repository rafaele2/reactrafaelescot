import React, { useEffect } from 'react'

const Button = (props) => {

    const handleClick = () => {
        console.log('hola')
    }

    useEffect(() => {
        const button = document.getElementById('button')
        
        button.addEventListener('click', handleClick)

        return () => {
            button.removeEventListener('click', handleClick)
        }
    }, [])

return <button id='button'>{props.label}</button>
       
    
}

export default Button