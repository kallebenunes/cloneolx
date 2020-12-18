import React from 'react'
import { Link } from 'react-router-dom'
import StyleLogo from './style'


const Logo = () => {
    return (
        <StyleLogo>
            <Link to='/'> 
                <span className="azul">O</span>
                <span className="branco">L</span>
                <span className="verde">X</span>
                
            </Link>
        </StyleLogo>
    )
}

export default Logo

