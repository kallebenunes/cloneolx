import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index'
import './reset.css'
function App() {
  

  return (
  
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>

  );
}

export default App;
