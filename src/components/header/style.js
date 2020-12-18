import styled from 'styled-components'
import Container from '../container-full'

const StyleHeader = styled(Container)`
    background: #eeeeee;
    padding: .5rem 0;
    
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        img{
            max-width: 2.5%
        }
    }
`

export default StyleHeader