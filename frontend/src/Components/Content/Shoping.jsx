import React, { useEffect, useState } from 'react'
import './Css/Shoping.css'
import { Link } from 'react-router'


export default function Shopping() {

  const [search,setSearch] = useState();
  const [searchdata,setSerachdata] = useState()
  const [data,setData] = useState();
  const [offer,setOffer] = useState()
  const [style,setStyle] = useState()

const fetchData =async () => {
    let res = await fetch('http://127.0.0.1:8000/api/shoping/')
    res = await res.json()
    if(res){setData(res)}
  }

  useEffect(()=>{
    fetchData();
  },[])
  
  const searchHandler =async (e) => {
    e.preventDefault();
    let res = await fetch('http://127.0.0.1:8000/api/search/',{
      method:"POST",
      body:JSON.stringify({
        search:search
      })
    })
    res = await res.json()
    if(res.error){console.log(res)}else{setSerachdata(res)}  
  }


  const Handler =async (name) => {
    setStyle(name)
    let res = await fetch('http://127.0.0.1:8000/api/shoping/',{
       method:"POST",
      body:JSON.stringify({
        search:name
      })
    })
    res = await res.json()
    if(res.error){console.log(res.error)}else{setOffer(res)}
    
  }

  return (
    <>

      <div className="shoping">
  <div className="form">
    <form className="d-flex" onSubmit={searchHandler} >
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          onChange={(e)=>setSearch(e.target.value)}
          aria-label="Search"
          name="pname/category"
        
        />
        <button className="btn btn-outline-success" type="submit" >Search</button>
    </form>
  </div>

  <div className="header">🛒 My Shopping Store</div>

  <div className="parent">
   
    {
      style == 'trending' ?  <button type="submit" id="btn" style={{backgroundColor: "#374151",color:"#fff"}}>Trending</button>   :
                          <button type="submit"  onClick={()=>Handler('trending')} className="" id="btn">Trending </button>  
    }

  {
      style == 'offer' ?  <button type="submit" id="btn" style={{backgroundColor: "#374151",color:"#fff"}}>Trending</button>   :
                          <button type="submit"  onClick={()=>Handler('offer')} className="" id="btn">Trending </button>  
  }
   

  </div>

  <div className="error">
      <h1 ></h1>
  </div>

  <div className="container">
    <div className="products">
      {
        searchdata ? 

        searchdata?.map((item,index)=>{
          return   <div className="product" key={index}>
                    <img src={`http://127.0.0.1:8000${item.pimg}`} alt="Product" />
                      <div className="info">
                        <h2>{item.pname}</h2>
                        <p className="desc">{item.desc}</p>
                        <p className="price">₹{item.price}</p>
                        <Link className="btn" to={`/orderDetails/${item.id}`}>Add To Cart</Link>
                      </div>
                 </div> 
        })    
        :
        offer ?   offer?.map((item,index)=>{
          return   <div className="product" key={index}>
                    <img src={`http://127.0.0.1:8000${item.pimg}`} alt="Product" />
                      <div className="info">
                        <h2>{item.pname}</h2>
                        <p className="desc">{item.desc}</p>
                        <p className="price">₹{item.price}</p>
                        <Link className="btn" to={`/orderDetails/${item.id}`}>Add To Cart</Link>
                      </div>
                 </div> 
        }) 
       
        
        :
        data?.map((item,index)=>{
          return   <div className="product" key={index}>
                    <img src={`http://127.0.0.1:8000${item.pimg}`} alt="Product" />
                      <div className="info">
                        <h2>{item.pname}</h2>
                        <p className="desc">{item.desc}</p>
                        <p className="price">₹{item.price}</p>
                        <Link className="btn"  to={`/orderDetails/${item.id}`}>Add To Cart</Link>
                      </div>
                 </div> 
        }) 
       
      }
 
    </div>
  </div>
</div>

    </>
  )
}
