import { useReducer } from "react";
import { Link, NavLink, useNavigate } from "react-router";

const userdata = {
  fname : "",
  lname : "",
  uname : "",
  email : "",
  password : "",
}
const Handler = (data,action) => {
  return  {...data,[action.type]:action.val}
}

export default function Register() {
  const navigate = useNavigate();
  const [stateData,dispatch] = useReducer(Handler,userdata)

  const submitHandler =async (e) => {
    e.preventDefault()
    let res = await fetch('http://127.0.0.1:8000/api/register/',{
      method:"POST",
      body:JSON.stringify({
        first_name:stateData.fname,
        username:stateData.uname,
        last_name:stateData.lname,
        email:stateData.email,
        password:stateData.password,
      })
    })
    res = await res.json()
    if(res.msg){ 
      alert(res.msg)
       navigate('/login')
    } else{ alert(res.error)}
  }
  return (
    <>
    <div className=" w-100 mt-5 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Create Account</h3>

        <form onSubmit={submitHandler} >
          <div className="mb-3">
            <input
              type="text"
              onChange={(e)=>dispatch({val:e.target.value,type:'fname'})}
              className="form-control"
              placeholder="First Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              onChange={(e)=>dispatch({val:e.target.value,type:'lname'})}
              className="form-control"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              onChange={(e)=>dispatch({val:e.target.value,type:'uname'})}
              className="form-control"
              placeholder="User Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              onChange={(e)=>dispatch({val:e.target.value,type:'email'})}
              className="form-control"
              placeholder="Emain"
              autoComplete="username"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              onChange={(e)=>dispatch({val:e.target.value,type:'password'})}
              className="form-control"
              placeholder="Password"
              autoComplete="current-password"
              required
            />
          </div>

          <button className="btn btn-primary w-100" type="submit" >
            Register
          </button>

            <p className="text-center mt-3 mb-0">
               Already have an account?{" "}
          <Link to="/login" className="text-decoration-none">
            Login
          </Link>
        </p>
        </form>
      </div>
    </div>
    </>
  );

}
