import React, { useReducer, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import './Css/OrderDetails.css'
import { NavLink } from 'react-router';

const orderData = {
    name:'',
    mobile:'',
    address:'',
    city:'',
    state:'',
    pincode:'',
    country:'',
    quantity:'',
    instruction:''
}

const handler = (data,action) => {
    return {...data,[action.type]:action.val}
}
export default function OrderDetails({id}) {
  const [state,dispatch] = useReducer(handler,orderData)  

  const url = useParams();
  const [data,setData] = useState([])

  const fetchData =async () => {
    let res = await fetch(`http://127.0.0.1:8000/api/productdetails/${url.id}`)
    res = await res.json()
    if(res){setData(res)}
  }

  useState(()=>{
    fetchData();
  })

  const order =async (e) => {
    e.preventDefault();
    let res =await fetch('http://127.0.0.1:8000/api/orderdetails/',{
        method:"PUT",
        body:JSON.stringify({            
    user_id : id ,
    product_id : url.id,
    pname : data.pname,
    price : data.price,
    name : state.name,
    mobile : state.mobile,
    address : state.address,
    city : state.city,
    state : state.state,
    pincode : state.pincode,
    country : state.country,
    quantity : state.quantity,
    instruction : state.instruction
        })
    })
    res = await res.json()
    if(res.msg){alert(res.msg)}else{alert(res.error)}
    window.location.href='/orders'
  }



  return (
    <> 
    { id ?
     <div className="shipping">
        <div className="container">

    <h2>Shipping Details</h2>

    <form method="POST">

        <div className="form-group">
            <label>Full Name</label>
            <input type="text" 
            onChange={(e)=>{dispatch({val:e.target.value,type:'name'})}}
            placeholder="Enter your full name"  value={state.name}/>
        </div>

        <div className="row">
            <div className="form-group">
                <label>Email Address</label>
                <input type="email" 
                onChange={(e)=>{dispatch({val:e.target.value,type:'email'})}}
                 placeholder="Enter email" value={state.email} />
            </div>
        </div>

        <div className="form-group">
            <label>Mobile Number</label>
            <input type="number" name="mobile"
            onChange={(e)=>{dispatch({val:e.target.value,type:'mobile'})}}
            placeholder="Enter Mobile Number" value={state.mobile}></input>
        </div>

                <div className="form-group">
                    <label>Product Name :</label>
                    <input type="text" name="pname" placeholder={data?.pname}  readOnly></input>
             </div>
                <div className="form-group">
                  <label>Product Price :</label>
                   <input type="number" name="price" placeholder={data?.price}  readOnly></input>
              </div>
 

        <div className="form-group">
            <label>Enter Product Quantity :</label>
            <input type="number" 
            onChange={(e)=>{dispatch({val:e.target.value,type:'quantity'})}}
            value={state.quantity}
            ></input>
            </div>

        <div className="form-group">
            <label>Address</label>
            <textarea name="address"
            onChange={(e)=>{dispatch({val:e.target.value,type:'address'})}}
            placeholder="Enter complete address" value={state.address}></textarea>
        </div>

        <div className="row">
            <div className="form-group">
                <label>City</label>
                <input type="text"  name="city" 
                onChange={(e)=>{dispatch({val:e.target.value,type:'city'})}} value={state.city}
                placeholder="City" />
            </div>

            <div className="form-group">
                <label>State</label>
                <input type="text" name="state" 
                onChange={(e)=>{dispatch({val:e.target.value,type:'state'})}}
                value={state.state}
                placeholder="State" />
            </div>
        </div>

        <div className="row">
            <div className="form-group">
                <label>Pincode</label>
                <input type="text" 
                onChange={(e)=>{dispatch({val:e.target.value,type:'pincode'})}}
                value={state.pincode}
                placeholder="Pincode" />
            </div>

            <div className="form-group">
                <label>Country</label>
                <select onChange={(e)=>{dispatch({val:e.target.value,type:'country'})}}>
                    <option defaultChecked>select country</option>
                    <option  value="india">India</option>
                </select>
            </div>
        </div>

        <div className="form-group">
            <label>Delivery Instructions</label>
            <textarea placeholder="Optional instructions" 
            onChange={(e)=>{dispatch({val:e.target.value,type:'instruction'})}}
            ></textarea>
        </div>

        <button type="submit" onClick={order} className="btn">
            Order
        </button>
    </form>
    </div>
  </div>
 :
        window.location.href = '/login'

}
    </>
  )
}
