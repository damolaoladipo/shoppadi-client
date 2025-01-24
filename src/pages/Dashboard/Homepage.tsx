import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../../layouts/Navigation";
import ProductCard from "../../layouts/ProductCard";

const Dashboard = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Organic Apples",
      price: 1.99,
      discountedPrice: 2.49,
      image: "/images/freshcart/couliflower.png",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Organic Bananas",
      price: 0.79,
      discountedPrice: 0.99,
      image: "/images/freshcart/apples.png",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Organic Grapes",
      price: 3.49,
      discountedPrice: 4.99,
      image: "/images/freshcart/lecttuce.png",
      rating: 4.3,
    },
    {
        id: 4,
        name: "Organic Grapes",
        price: 3.49,
        discountedPrice: 4.99,
        image: "/images/freshcart/orange.png",
        rating: 4.3,
      }, {
        id: 1,
        name: "Organic Apples",
        price: 1.99,
        discountedPrice: 2.49,
        image: "/images/freshcart/couliflower.png",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Organic Bananas",
        price: 0.79,
        discountedPrice: 0.99,
        image: "/images/freshcart/apples.png",
        rating: 4.7,
      },
      {
        id: 3,
        name: "Organic Grapes",
        price: 3.49,
        discountedPrice: 4.99,
        image: "/images/freshcart/lecttuce.png",
        rating: 4.3,
      },
      {
          id: 4,
          name: "Organic Grapes",
          price: 3.49,
          discountedPrice: 4.99,
          image: "/images/freshcart/orange.png",
          rating: 4.3,
        },
     {
      id: 1,
      name: "Organic Apples",
      price: 1.99,
      discountedPrice: 2.49,
      image: "/images/freshcart/couliflower.png",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Organic Bananas",
      price: 0.79,
      discountedPrice: 0.99,
      image: "/images/freshcart/apples.png",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Organic Grapes",
      price: 3.49,
      discountedPrice: 4.99,
      image: "/images/freshcart/lecttuce.png",
      rating: 4.3,
    },
    {
        id: 4,
        name: "Organic Grapes",
        price: 3.49,
        discountedPrice: 4.99,
        image: "/images/freshcart/orange.png",
        rating: 4.3,
      },
      
      {
        id: 1,
        name: "Organic Apples",
        price: 1.99,
        discountedPrice: 2.49,
        image: "/images/freshcart/couliflower.png",
        rating: 4.5,
      },
      {
        id: 2,
        name: "Organic Bananas",
        price: 0.79,
        discountedPrice: 0.99,
        image: "/images/freshcart/apples.png",
        rating: 4.7,
      },
      {
        id: 3,
        name: "Organic Grapes",
        price: 3.49,
        discountedPrice: 4.99,
        image: "/images/freshcart/lecttuce.png",
        rating: 4.3,
      },
      {
          id: 4,
          name: "Organic Grapes",
          price: 3.49,
          discountedPrice: 4.99,
          image: "/images/freshcart/orange.png",
          rating: 4.3,
        },
      
  ]);

  return (
    <>
      <div className="dashboard">
        <Navigation />

        <Container className="mt-4">
          <Row>
            <Col>
              <h2 className="mb-4">Our Products</h2>
              <Row xs={1} md={2} lg={4} className="g-4">
                {products.map((product) => (
                  <Col key={product.id}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      discount={product.discountedPrice}
                      rating={product.rating}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
