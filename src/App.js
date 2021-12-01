
import './App.css';
import { useState } from 'react';
import Login from './components/login/login';
import Register from  './components/register/register'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Addproduct from './components/addproducts/addproduct';
import Productlist from './components/productlist/products';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Login/>}/>
      
        <Route path="/register" element ={<Register/>}/>
        <Route path="/addproduct" element={<Addproduct/>} />
        <Route path="/productlist" element={<Productlist/>} />
      </Routes>
    </Router>
  );
}

export default App;
