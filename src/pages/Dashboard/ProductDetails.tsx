import React, { useState, useEffect, useContext } from "react";


const productImages = [
    "/images/freshcart/lecttuce.png",
    "/images/freshcart/lecttuce.png",
    "/images/freshcart/apples.png",
    "/images/freshcart/lecttuce.png",
    "/images/freshcart/lecttuce.png",
  ];
  
const ProductDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + productImages.length) % productImages.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: any) => {
    setQuantity(Math.max(1, quantity + amount));
  };


  useEffect(() => {}, []);

  return (
    <>
      <div className="product-details">

      <div className="thumbnail-container">
          {productImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className={`thumbnail ${
                index === currentImageIndex ? "active" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>

        <div className="image-container">
          <button onClick={handlePrevImage}>&lt;</button>
          <img
            src={productImages[currentImageIndex]}
            alt="Product"
            className="main-image"
          />
          <button onClick={handleNextImage}>&gt;</button>
        

        
      </div>

      
      <h2>Chinese Cabbage</h2>
      <div className="in-stock">In Stock</div>

      <div className="rating">
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span className="star">★</span>
        <span>4 Review</span>
      </div>

      <div className="sku">SKU: 2,61,564</div>

      <div className="price">
        <span className="old-price">$48.00</span>
        <span className="new-price">$17.28</span>
        <span className="discount">64% OFF</span>
      </div>

      <div className="brand">
        <span>Brand:</span>
        <img src="/images/brand-logo.png" alt="Brand Logo" />
      </div>

      <div className="share">
        <span>Share item:</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest-p"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="description">
        {/* Product description here */}
      </div>

      <div className="quantity">
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>

      <button className="add-to-cart">Add to Cart <i className="fas fa-shopping-cart"></i></button>

      <div className="wishlist">
        <i className="far fa-heart"></i>
      </div>

      <div className="category">
        <span>Category:</span>
        <span>Vegetables</span>
      </div>

      <div className="tags">
        <span>Tags:</span>
        <span>Vegetables</span>
        <span>Healthy</span>
        <span>Chinese</span>
        <span>Cabbage</span>
        <span>Green</span>
        <span>Fresh</span>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
