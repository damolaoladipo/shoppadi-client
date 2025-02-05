import React, { useState } from "react";
import { IProduct } from "../utils/freshcart.util";

interface ProductDetailsProps {
  product: IProduct;
  onAddToCart: (product: IProduct, quantity: number) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity); // Pass both product and quantity
  };

  return (
    <div className="product-details-container">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>

        <div className="product-price">
          {product.discount ? (
            <>
              <span className="old-price">${product.price.toFixed(2)}</span>
              <span className="new-price">
                ${((product.price * (1 - product.discount))).toFixed(2)}
              </span>
              <span className="discount">{(product.discount * 100).toFixed(0)}% OFF</span>
            </>
          ) : (
            <span className="new-price">${product.price.toFixed(2)}</span>
          )}
        </div>

        <p className="product-description">{product.description}</p>

        <div className="quantity-container">
          <button 
            className="quantity-btn" 
            onClick={() => handleQuantityChange(-1)}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button 
            className="quantity-btn" 
            onClick={() => handleQuantityChange(1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button onClick={handleAddToCart} className="add-to-cart-btn">
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
