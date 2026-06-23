import React, { Suspense, useEffect, useState } from 'react'
import { Routes,Route } from 'react-router';
import Register from './Components/User/Register';
import Navbar from './Components/Content/NavBar';
import Login from './Components/User/Login';
import Home from './Components/Content/Home';
import About from './Components/Content/About';
import Contact from './Components/Content/Contact';
import Profile from './Components/User/Profile';
import EditDetails from './Components/User/EditDetails';
import Logout from './Components/User/Logout';
import Shoping from './Components/Content/Shoping';
import Category from './Components/Content/Category';
import Orders from './Components/Content/Orders';
import Forgot from './Components/User/Forgot';
import OrderDetails from './Components/Content/OrderDetails';


export default function App() {
const id = localStorage.getItem("id");

  return (
    <>
    <Routes>
    
        <Route element={<Navbar id={id} />}>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/shoping' element={<Shoping />} />
            <Route path='/category' element={<Category />} />
            <Route path='/orders' element={<Orders id={id}  />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} /> 
            <Route path='/logout' element={<Logout />} />
            <Route path='/about' element={<About />} ></Route>
            <Route path='/contact' element={<Contact />} ></Route>

            <Route path='/profile' element={<Profile   />}></Route>
            <Route path='/editDetails/:id' element={<EditDetails   />} />

            <Route path='/forgot' element={<Forgot />} />

            <Route path='/orderDetails/:id'  element={<OrderDetails id={id} />}/>
        </Route>

    </Routes>   

    </>
  )
}
