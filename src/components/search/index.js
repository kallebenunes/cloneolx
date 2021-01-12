import React from 'react'
import Container from '../container'
import StyleSearch from './style'


const Search = () => {
    return (
        <StyleSearch className='dark'>
            <Container>
                <form>
                    <input type="text" placeholder="O que você procura ? " />
                    <select>
                        <option value="" key=""></option>
                    </select>
                    <button>Pesquisar</button>
                </form>
            </Container>
        </StyleSearch>
    )
}

export default Search
