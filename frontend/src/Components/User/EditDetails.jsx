import React, { useState } from 'react'
import '../Content/Css/Edit_details.css'
import { useParams } from 'react-router'

export default function EditDetails() {
    const url = useParams();
    const user = JSON.parse(localStorage.getItem("user"))
    const [fname,setFname] = useState(user.first_name);  
    const [lname,setLname] = useState(user.last_name);
    const [uname,setUname] = useState(user.username);
    const [email,setEmail] = useState(user.email);


    const submitHandler =async (e) => {
        e.preventDefault()
        let res = await fetch(`http://127.0.0.1:8000/api/profile/${url.id}`,{
            method:"PUT",
            body:JSON.stringify({
                id:user.id,
                username:uname,
                first_name:fname,
                last_name:lname,
                email:email,
                password:user.password
            })
        });
        res = await res.json()
        if(res.msg){ alert(res.msg)}else{ alert(res.error)}
    }

    
  return (
    <>
    <div className="edit">
<div className="container">
    <h3>Edit Profile </h3>

    <form method="POST" onSubmit={submitHandler}>

        <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname"
            onChange={(e)=>setFname(e.target.value)}
            value={fname}   
                  /> 
        </div>

        <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" 
            onChange={(e)=>setLname(e.target.value)}
            value={lname} 
             />
        </div>

        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="uname" 
            onChange={(e)=>setUname(e.target.value)}
            value={uname} 
          />
        </div>

        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" 
            onChange={(e)=>setEmail(e.target.value)}
            value={email} 
            />
        </div>
    

        <button type="submit" className="btn">Update Profile</button>
    </form>
</div>
</div> 
    </>
  )
}
