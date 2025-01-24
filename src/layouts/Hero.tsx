import React, { useState, useEffect, useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineArrowRight } from 'react-icons/ai';




const heroImages = [
    "/images/freshcart/hero-image.png",
    "/images/freshcart/hero-image.png",
    "/images/freshcart/hero-image.png",
    
]

const HeroSection = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
              (prevIndex + 1) % heroImages.length
            );
          }, 5000); 

          return () => clearInterval(intervalId);
    }, []);

    return (
        <>

    <section className="hero">
      <Container>
        <Row className="align-items-center">

        <Col md={6}>
            <div className="hero-image">
              
              <img 
              src={heroImages[currentImageIndex]} 
              alt="Fresh produce in a basket" 
              />

            </div>
          </Col>


          <Col md={6} className="order-md-2">
            <div className="hero-content">
              <p className="welcome-text">Welcome to FreshCart</p>
              <h1>Fresh & Healthy Organic Food</h1>
              <p className="sale-text">Sale up to 80% OFF</p>
              <p className="shipping-text">
                Free shipping on all your orders. We deliver joy to you.
              </p>
              <Button           
                className="shop-now-btn"
                >
                    Shop Now {<AiOutlineArrowRight style={{ marginLeft: "8px" }}/>}
                
                </Button >

            </div>
          </Col>

          
        </Row>
      </Container>
    </section>
        </>
    );
};

export default HeroSection;