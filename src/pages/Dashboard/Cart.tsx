import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { FiX } from "react-icons/fi";
import Navigation from "../../layouts/Navigation";

const ShoppingCart = () => {
  // Example cart items
  const initialCartItems = [
    { id: 1, name: "Fresh Lettuce", price: 5.99, image: "/images/freshcart/lettuce.png", quantity: 1 },
    { id: 2, name: "Organic Tomatoes", price: 3.49, image: "/images/freshcart/tomatoes.png", quantity: 2 },
    { id: 3, name: "Green Apples", price: 2.99, image: "/images/freshcart/apples.png", quantity: 3 },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  // Remove item from cart
  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Update quantity
  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate total price
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div>
        <Navigation cartCount={cartItems.length} handleCartToggle={() => {}} />
      </div>

      <div className="mrgb10"></div>

      <div>
        {/* Fixed Header */}
        <Container className="mt-10 mrgb3">
          <div className="shopping-cart-header mb-4">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <p>{cartItems.length} items in your cart</p>
            )}
          </div>

          <Row>
            <Col md={8}>
              {/* Cart Items */}
              {cartItems.map((item) => (
                <Card key={item.id} className="mb-3 shadow-sm rounded">
                  <Card.Body className="d-flex align-items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                    <div className="ms-3 flex-grow-1">
                      <h5>{item.name}</h5>
                      <p className="text-muted">
                        {item.quantity} x ${item.price.toFixed(2)}
                      </p>
                      <div className="d-flex align-items-center gap-3">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <FiX />
                        </Button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleUpdateQuantity(item.id, +e.target.value)}
                          className="form-control w-auto"
                          style={{ maxWidth: "60px" }}
                        />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Col>

            {/* Order Summary */}
            <Col md={4}>
              <Card className="shadow-sm rounded">
                <Card.Body>
                  <h5>Order Summary</h5>
                  <div className="d-flex justify-content-between mt-3">
                    <span>Total Items</span>
                    <span>{cartItems.length}</span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <span>Total Price</span>
                    <span className="fw-bold">${totalAmount.toFixed(2)}</span>
                  </div>
                  <Button className="w-100 mt-4" variant="success">
                    Proceed to Checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ShoppingCart;
