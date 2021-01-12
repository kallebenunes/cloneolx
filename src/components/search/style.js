import styled from 'styled-components';

const StyleSearch = styled.div`
    padding: 20px 0;
   form {
    background: #84b130;
    padding: 1.4rem 1rem;
    border-radius: 10px;
    display: flex;
    
        input, select {
            height: 2.5rem;
            margin-right: 1.5rem;
            border-radius: 5px;
            background: #EEEEEE;
        }

        input {
            flex: 1; 
            border: none;
            padding: 0.7rem 0.5rem;
            
        }

        button {
            background: #0082e1; 
            border: none; 
            border-radius: 5px;
            color: white;
            padding: 0 1.5rem;
        }

        select {
            max-width: 100px;
            flex-basis: 100px;
        }
        @media (max-wdith: 600px){
            input, select, button {
                color: blue;
            }
        }
   }
`;

export default StyleSearch