import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { IProduct } from "../utils/freshcart.util";

const ProductCard = (props: IProduct) => {
  const { name, price, discount, image, rating, onAddToCart, onClick } = props;

  const [liked, setLiked] = useState(false);
  const [isCartClicked, setCartClicked] = useState(false);
  
  const safeRating = rating ?? 0;

  const handleLike = () => {
    setLiked(!liked); 
  };

  const handleCartClick = () => {
    setCartClicked(!isCartClicked); 
  };

  return (
    <Card className="product-card" style={{ padding: "5px" }} onClick={onClick}>
      <div className="card-image" style={{ position: "relative" }}>
        <Card.Img variant="top" src={image} alt={name} />
        <div
          className="like-icon"
          onClick={handleLike}
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
            fontSize: "1.5rem",
            border: "1px solid gray",
            justifyContent: "center",
            borderRadius: "50%",
            padding: "10px",
            backgroundColor: "white",
            color: liked ? "red" : "gray",
            transition: "all 0.3s",
          }}
        >
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
      </div>
      <Card.Body>
        <div
          className="details-section"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left Section */}
          <div
            className="info-section"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              
            }}
          >
            <Card.Title
              style={{
                color: "green",
                fontWeight: "bold",
                marginBottom: "0",
              }}
            >
              {name}
            </Card.Title>
            
            
            <div className="price-section">
              <span
                className="price"
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              >
                ${price.toFixed(2)}
              </span>
              <span
                className="discounted-price"
                style={{
                  textDecoration: "line-through",
                  color: "gray",
                  fontSize: "1rem",
                }}
              >
                ${discount.toFixed(2)}
              </span>
            </div>
            

            <div className="rating" style={{ display: "flex", alignItems: "center" }}>
              {Array.from({ length: 5 }, (_, index) => (
                <AiFillStar
                  key={index}
                  color={index < Math.round(safeRating) ? "#FFD700" : "#E0E0E0"}
                  style={{ marginRight: "2px" }}
                />
              ))}
              <span
                className="rating-value"
                style={{ marginLeft: "5px", fontSize: "0.9rem", color: "#333" }}
              >
                ({safeRating.toFixed(1)})
              </span>
            </div>
          </div>


          {/* Right Section: Cart Icon */}
          <div
            className="checkout-icon"
            onClick={handleCartClick}
            style={{
              cursor: "pointer",
              fontSize: "2rem",
              color: isCartClicked ? "white" : "green" ,
              marginLeft: "auto",
              backgroundColor: isCartClicked ? "#15A157" : "#F2F2F2",
              padding: "15px",
              borderRadius: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.3s ease", 
            }}
          >
            <AiOutlineShoppingCart />
          </div>

        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
