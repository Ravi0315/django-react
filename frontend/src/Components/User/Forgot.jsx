import React, { useState } from 'react'
import '../Content/Css/Forgot.css'
import { Link } from 'react-router'

export default function Forgot() {
    const [uname,setUname] = useState()
    const [password,setPassword] = useState()

  const submitHandler =async (e) => {
    e.preventDefault();
    let res = await fetch('http://127.0.0.1:8000/api/forgot/',{
        method:"POST",
        body:JSON.stringify({
            'username':uname,
            'password':password
        })
    });
    res = await res.json()
    if(res.msg){
        alert(res.msg)
    }else{
        alert(res.error)
    }
 }

  return (
    <>
    <div className="forgot">
        <div className="container">
            <h2>Forgot Password</h2>
            <span></span>
    <form  onSubmit={submitHandler} >
        <input type="text" name="user_name" placeholder="Enter your username" 
        onChange={(e)=>setUname(e.target.value)}
        autoComplete="username"
        required />

        <input type="password" name="password" placeholder="New password"
        onChange={(e)=>setPassword(e.target.value)}
        autoComplete="current-password"
        required />

        <button type="submit">Reset Password</button>

        <p className="text-center mt-3 mb-0">
                Back Login ! {" "}
          <Link to="/register" className="text-decoration-none">
            Login
          </Link>
          </p>
    </form>
 </div>
</div>

    </>
  )
}
