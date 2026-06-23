import { useState } from "react";
import { Link, useNavigate } from "react-router";


function Login() {
  const [uname,setUname] = useState();
  const [pass,setPass] = useState();
  const navigate = useNavigate()

  const submitHandler =async (e) => {
    e.preventDefault();
    let res = await fetch('http://127.0.0.1:8000/api/login/',{
      method:"POST",
        body:JSON.stringify({
          'username':uname,
          'password':pass,
        })
    });
    res = await res.json()
    if(res.msg){
      localStorage.setItem("id",res.id)
      alert(res.msg)
      window.location.href= "/"
    }else{
      alert(res.error)
    }
    setUname("")
    setPass("")
  }
  return (
    <div className=" w-100 mt-5 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              onChange={(e)=>setUname(e.target.value)}
              className="form-control"
              value={uname}
              placeholder="Enter Username"
              autoComplete="username"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              onChange={(e)=>setPass(e.target.value)}
              value={pass}
              className="form-control"
              autoComplete="current-password"
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

           <div className="d-flex w-100 justify-content-center mt-2">
          <Link to="/forgot" className="text-decoration-none small">
              Forgot Password?
            </Link>
          </div>
              
               <p className="text-center mt-3 mb-0">
          Don’t have an account?{" "}
          <Link to="/register" className="text-decoration-none">
            Register
          </Link>
        </p>
        </form>
      </div>
    </div>
  );
}

export default Login;