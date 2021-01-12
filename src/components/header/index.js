import React from 'react'
import styled from 'styled-components'
import Container from '../container'
import ContainerFull from '../container-full'
import Logo from '../logo/index'
import HeaderMenu from '../header-menu'
import StyleHeader from './style'

const Header = () => {
    return (
        <StyleHeader className="dark">
            <ContainerFull>
                <Container>
                    <header >
                        <Logo/>
                        <HeaderMenu/>
                    </header>
                </Container>
            </ContainerFull>
        </StyleHeader>
    )
}

export default Header
