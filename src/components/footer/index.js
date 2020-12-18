import React from 'react'
import Container from '../container'
import ContainerFull from '../container-full'

import styled from 'styled-components';

const FooterStyle = styled.footer`
    height: 74px;
    background: violet;
`

const Footer = () => {
    return (


        <FooterStyle>
            <ContainerFull>
                <Container>Qual o conteúdo daqui ? </Container>
            </ContainerFull>    
        </FooterStyle>
    )   
}

export default Footer
