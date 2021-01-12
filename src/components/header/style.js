import styled from 'styled-components'
import Container from '../container-full'

const StyleHeader = styled(Container)`
    background: #eeeeee;
    padding: .5rem 0;

    .dark {
        background: #3c3c3c;
    }
    
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