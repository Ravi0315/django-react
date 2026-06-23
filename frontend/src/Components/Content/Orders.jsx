import React, { useEffect, useState } from 'react'
import './Css/Orders.css'
import { NavLink } from 'react-router'

export default function Orders({id}) {
  const [order,setOrder] = useState([])
  const [quantity,setQuantity] = useState()

  const fetchOrder =async () => {
    let res = await fetch(`http://127.0.0.1:8000/api/order/${id}`)
    res = await res.json()
    if(res.error){alert(res.error)}else{setOrder(res)}
  }

useEffect(()=>{
  fetchOrder();
},[])

const plusminus =async (product_id,user_id,action) => {
  let res = await fetch(`http://127.0.0.1:8000/api/order/${user_id}`,{
    method:"PUT",
    body:JSON.stringify({
      product_id:product_id,
      user_id:user_id,
      action:action
    })
  })
  res = await res.json()
  if(res.error){alert(res.error)}else if(res.delete){ window.location.href = '/shoping'}else{setQuantity(res.quantity)}
}


  return (
    <>
  { id ?      
<div className="addtocart">
<div className="container">
    <h1>Order Products </h1>
   
    <div className="card">

        <table>
            <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Mobile Number</th>
                    <th>Address</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Delete</th>
                </tr>
       
        {
          order 
          && order.map((item,index)=>{
            return  <tr key={index}>
                <td>{item.pname}</td>
                <td>{item.price}</td>
                <td>{item.mobile}</td>
                <td>{item.address}</td>
                <td>  
                         <button className="qty-btn" onClick={()=>plusminus(item.product_id,item.user_id,'minus')} type="submit" name="minus"> - </button>
                        <input type="text" name="data" className="qty-input" style={{display: "none"}} />
                         <span className="span" >{quantity ? quantity : item.quantity}</span>
                        <button className="qty-btn" onClick={()=>plusminus(item.product_id,item.user_id,'plus')} type="submit" name="plus">+</button>
                </td>
                <td>{item.total}</td>
                <td><button  className="link" type='submit' onClick={()=>plusminus(item.product_id,item.user_id,'delete')}>Cancle</button></td>
                  </tr>   
                  })      

                }

         </thead>
            <tbody>
                   
            </tbody>
        </table>
       </div>

      </div>
    </div>
  :
    window.location.href= '/login'
  }
    </>
  )
}
