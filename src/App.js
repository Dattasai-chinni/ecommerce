import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import Home from './Home/Home'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import Cart from './Cart/Cart'
import Addproduct from './AddProducts/AddProduct'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path = "/signup" element ={<Signup/>}/>
        <Route path = "/login" element ={<Login/>} />
        <Route path ="/cart" element={<Cart/>}/>
        <Route path = "/add-product" element = {<Addproduct/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}
