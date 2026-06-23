import React from 'react'
import './Css/About.css';

export default function About() {
  return (
    <>
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


<footer className="footer">
    <p>© 2026 ShopEasy. All Rights Reserved.</p>
</footer>
    </>
  )
}
