import React, { useState, useEffect, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';



const categories = [
    {
      name: 'Fresh Fruit',
      image: "/images/freshcart/couliflower.png",
    },
    {
      name: 'Fresh Vegetables',
      image: "/images/freshcart/couliflower.png",
    },
    {
      name: 'Meat & Fish',
      image: "/images/freshcart/couliflower.png",
    },
    {
      name: 'Snacks',
      image: "/images/freshcart/couliflower.png",
    },
    {
      name: 'Beverages',
      image: "/images/freshcart/couliflower.png",
    },
    {
      name: 'Beauty & Health',
      image: "/images/freshcart/couliflower.png",
    },
    {
      name: 'Bread & Bakery',
      image: "/images/freshcart/couliflower.png",
    },
    {
      name: 'Baking Needs',
      image: "/images/freshcart/couliflower.png",
    },
    {
      name: 'Cooking',
      image: "/images/freshcart/couliflower.png",
    },
    {
      name: 'Diabetic Food',
      image: "/images/freshcart/couliflower.png",
    },
    {
      name: 'Dish Detergents',
      image: "/images/freshcart/couliflower.png",
    },
    {
      name: 'Oil',
      image: "/images/freshcart/couliflower.png",
    },
  ];


const Category = () => {

    useEffect(() => {
    }, []);

    return (
        <>
            <section className="category-section">
      <Container>
        <div className="section-header">
          <h2>Popular Categories</h2>
          <a href="#" className="view-all-link">
            View All
          </a>
        </div>
        <Row>
          {categories.map((category, index) => (
            <Col key={index} md={4} lg={3}>
              <div className="category-card">
                <img src={category.image} alt={category.name} />
                <h3>{category.name}</h3>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
        </>
    );
};

export default Category;