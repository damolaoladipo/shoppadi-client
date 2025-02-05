import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { IProduct } from "../utils/freshcart.util";
import ProductDetails from "./ProductDetails";


const CartModal = ({ product, onAddToCart }: { product: IProduct; onAddToCart: () => void }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => setShowDetails(true);
  const handleCloseDetails = () => setShowDetails(false);

  return (
    <div className="product-card" onClick={handleShowDetails}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      
      {/* Modal for product details */}
      <Modal show={showDetails} onHide={handleCloseDetails}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductDetails product={product} onAddToCart={onAddToCart} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CartModal;
