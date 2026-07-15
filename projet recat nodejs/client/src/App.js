import React from "react";
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './elements/Home'
import Create from './elements/Create'
import Edite from './elements/Edite'
import Read from './elements/Read'

function APP() {
  return(
    <BrowserRouter>
    <Route path="/" element={<Home />} />
    <Route path="/Create" element={<Create />} />
    <Route path="/Edite" element={<Edite />} />
    <Route path="/Read" element={<Read />} />
    </BrowserRouter>
  )
}

export default App