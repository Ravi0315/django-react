import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import Navbar from '../Content/NavBar';

export default function Logout() {
    const  navigate = useNavigate();
    useEffect( () =>{
        logout();
    },[])
    
    const logout =async () => {
        let res = await fetch(`http://127.0.0.1:8000/api/logout`);
        res = await res.json()
        if(res){ 
            localStorage.removeItem('id')
            localStorage.removeItem('user')
            window.location.href= "/"  }
    }
    
  return (
    <> 
    </>
  )
}
