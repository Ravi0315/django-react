import React, { useEffect } from 'react'
import { Link } from 'react-router'
import './Css/Home.css';
import './Css/About.css';
import './Css/Contact.css';


export default function Home() {
  
  return (
    <>
<div className="home">
    <img className="img" src="https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
    <div className="msg">
        <h1>Smart Shopping </h1>
        <h1> Trusted by Millions</h1>
        <Link className="btn" to="/shoping">Shop Now</Link>
    </div>
<div className="show">
    <img className="f_img" src="https://images.meesho.com/images/marketing/1744698265981.webp" alt="" />
    <div className="child">
        <img src="https://images.meesho.com/images/marketing/1744722796811.webp" alt="" />
        <img src="https://images.meesho.com/images/marketing/1744635113661.webp" alt="" />
        <img src="https://images.meesho.com/images/marketing/1744635139351.webp" alt="" />
        <img src="https://images.meesho.com/images/marketing/1744635189897.webp" alt="" />
    </div>
</div>


 <section className="hero">
    <h1>About Us</h1>
    <p>
        We make online shopping simple, secure, and affordable for everyone.
        Discover thousands of products with fast delivery and excellent customer service.
    </p>
</section>

<section className="about">
    <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800"
         alt="Shopping Store" /> 

    <div className="about-content">
        <h2>Who We Are</h2>
        <p>
            ShopEasy is an online shopping platform dedicated to providing
            high-quality products at competitive prices. We connect customers
            with trusted brands and sellers from around the world.
        </p>

        <p>
            Our mission is to create a seamless shopping experience through
            innovation, reliability, and outstanding customer support.
        </p>

        <p>
            Since our launch, we have served thousands of happy customers and
            continue to grow every day.
        </p>
    </div>
</section>

<section className="features">
    <h2>Why Choose Us?</h2>

    <div className="feature-container">

        <div className="feature-box">
            <h3>🚚 Fast Delivery</h3>
            <p>Quick and reliable shipping to your doorstep.</p>
        </div>

        <div className="feature-box">
            <h3>🔒 Secure Payments</h3>
            <p>Safe and protected payment methods.</p>
        </div>

        <div className="feature-box">
            <h3>⭐ Quality Products</h3>
            <p>Carefully selected products from trusted sellers.</p>
        </div>

        <div className="feature-box">
            <h3>📞 24/7 Support</h3>
            <p>Friendly customer support whenever you need help.</p>
        </div>

    </div>
</section>


 <div className="contact" id="contact">
    <div className="left">
      <h2>Contact Us</h2>
      <p>
        Have questions about your order or products?  
        We are here to help you 24/7.
      </p>

      <div className="info">
       📍 Ahmedabad, India  <br></br>
        📞 +91 98765 43210  <br></br>
         📧 support@shopeasy.com
      </div>
    </div>
</div>


<footer className="footer">
    <p>© 2026 ShopEasy. All Rights Reserved.</p>
</footer>
</div>
    </>
  )
}
