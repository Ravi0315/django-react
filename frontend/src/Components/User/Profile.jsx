import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router';
import '../Content/Css/Profile.css';

export default function Profile() {

    let id = localStorage.getItem("id") 

const fetchData =async () => {
    let res = await fetch(`http://127.0.0.1:8000/api/profile/${id}`);
    res = await res.json()

    if(res){
      localStorage.setItem("user", JSON.stringify({
        id:res.id,
        username:res.username,
        first_name:res.first_name,
        last_name:res.last_name,
        email:res.email,
        password:res.password,
      }))
    }
  }

useEffect(()=>{
  fetchData();
},[])

const user = JSON.parse(localStorage.getItem("user"))

  return (
    <>
<div className="profile">
    <div className="profile-card">

    <div className="header">
      <h2>My Account</h2>
      <p>Shopping Profile Details</p>
    </div>

    <img className="avatar" src="https://i.pravatar.cc/150?img=12" alt="User" />
<div className="data">

      {
        user ? <>
        
      <div className="infor">
        <span className="label">First Name </span>
        <span className="value">{user.first_name}</span>
      </div>

      <div className="infor">
        <span className="label">Last Name</span>
        <span className="value">{user.first_name}</span>
      </div>

      <div className="infor">
        <span className="label">Username</span>
        <span className="value">{user.username}</span>
      </div>

      <div className="infor">
        <span className="label">Email</span>
        <span className="value">{user.email}</span>
      </div>

      <div className="infor">
        <Link  className="btn " to={`/editDetails/${user.id}`} >Edit Profile</Link>
        <Link className="btn " to="/" >Logout</Link>
      </div>
        
        </> : ""
      }

    </div>
    </div>
  </div>
    </>
  )
}
