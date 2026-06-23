import React, { useEffect, useState } from 'react'
import './Css/Category.css'
import { NavLink } from 'react-router'

export default function Category() {
  const [cateData,setCateData] = useState()
  const [category,setcategory] = useState()
  const [click,setClick] = useState()

  const fetchCategory =async () => {
    let res =await fetch('http://127.0.0.1:8000/api/category/')
    res = await res.json()
    if(res){setcategory(res)}
  }
  useEffect(()=>{
    fetchCategory();
  },[])

const clickHandler =async (cate) => {
    setClick(cate)
   let res =await fetch('http://127.0.0.1:8000/api/category/',{
    method:"POST",
    body:JSON.stringify({
          category:cate
    })
   })
    res = await res.json()
    if(res.error){console.log(res.error)}else{setCateData(res)}
}

  return (
    <>
<div className="category">
      <header className="header">
            <h1>Shop by Category</h1>
      </header> 
    <section className="category-container">
  
        {
            category?.map((cate,index)=>{
              return  <>
              {click == cate ?
                    <button type="submit" key={index}  id="btn" style={{backgroundColor:" #374151",color:"#fff"}}>{cate}</button>
                :
                      <button type="submit" onClick={()=>clickHandler(cate)}  key={index} id="btn" >{cate}</button>
                
              }
              </>
            })
        }
    
</section>
</div>

  <div className="header">🛒 My Shopping Store</div>
  <div className="container">
    
    <div className="products">

        {
          cateData && cateData.map((item,index)=>{
            return   <div className="product" key={index}>
                            <img src={`http://127.0.0.1:8000${item.pimg}`} alt="Product" />
                          <div className="info">
                              <h2>{item.pname}</h2>
                              <p className="desc">{item.desc}</p>
                              <p className="price">₹{item.price}</p>
                              <NavLink  id="button" to={`/orderDetails/${item.id}`}>Add to Cart</NavLink>
                           </div>
                     </div>
          })
        }

    </div>
</div>

    </>
  )
}
