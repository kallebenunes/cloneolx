import React from 'react'
import { Link } from 'react-router-dom'
import StyleHeaderMenu from './style'

const HeaderMenu = () => {
    let logged = false;

    return (
        <StyleHeaderMenu>
            <nav>
                <ul>
                    {!logged && <li><button>Login</button></li>}
                    {logged &&
                        <>
                            <li><Link>Minha conta</Link></li>
                            <li><button>Sair</button></li>
                        </>
                    }
                    <li><Link className='announce' to={logged ? '/announce' : '/login'}>Postar anúncio</Link> </li> 
                    
                </ul>
            </nav>
        </StyleHeaderMenu>
    )
}

export default HeaderMenu

