import styled from 'styled-components';

const StyleHeaderMenu = styled.nav`

ul {
    display: flex;
    align-items: center;
    
    li {
        margin-left: 1rem;
    }
    
    a{
        text-decoration: none;
        color: #4e4e4e;

        &:hover {
            color: #d97113;
            transition: .1s ease all;
        }
    }
    button {
        background: transparent;
        border: none;
        color: #4e4e4e;
        
        &:hover {
            color: #d97113;
            transition: .1s ease all;
        }
    }

    .announce {
        padding: .5rem .5rem;
        background: #ff8000; 
        border-radius: 5px;
        color: white;
        transition: .2s ease all;

        &:hover {
            background: #d97113;
            color:      #fff;
        }
    }    

  }

`

export default StyleHeaderMenu