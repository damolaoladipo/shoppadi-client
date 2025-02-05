import React from "react";
import { FiX } from "react-icons/fi";
import { Button } from "react-bootstrap";
import { IShoppingCart } from "../../utils/interface.util";

const ShoppingCart = ({ isOpen, onClose }: IShoppingCart) => {
  const cartItems = [
    { id: 1, name: "Fresh Indian lecttuce", price: 12.0, image: "/images/freshcart/apples.png" },
    { id: 2, name: "Green Apple", price: 14.0, image: "/images/freshcart/apples.png" },
    { id: 1, name: "Fresh Indian lecttuce", price: 12.0, image: "/images/freshcart/lecttuce.png" },
    { id: 2, name: "Green Apple", price: 14.0, image: "/images/freshcart/apples.png" }
  ];

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={`shopping-cart-overlay ${isOpen ? "open" : ""}`}>
      <div className="shopping-cart">
        <div className="w-96 bg-white shadow-lg rounded-xl p-6 fixed right-0 top-0 h-screen d-flex flex-column">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center border-bottom pb-4">
            <h2 className="text-lg fw-semibold">
              Shopping Cart ({cartItems.length})
            </h2>
            <FiX className="cursor-pointer" onClick={onClose} />
          </div>

          {/* Cart Items */}
          <div className="flex-grow overflow-auto mt-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between border-bottom py-3"
              >
                <div className="d-flex align-items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-sm fw-medium">{item.name}</p>
                    <p className="text-xs text-muted">
                      1 kg ×{" "}
                      <span className="fw-bold">${item.price.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                <FiX className="cursor-pointer text-muted" />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-4">
            <div className="d-flex justify-content-between text-sm fw-medium mb-4">
              <span>
                {cartItems.length} Product{cartItems.length > 1 ? "s" : ""}
              </span>
              <span className="fw-bold">${totalAmount.toFixed(2)}</span>
            </div>
            <Button className="w-100 bg-success text-white py-3 rounded-lg mb-2">
              Checkout
            </Button>
            <Button className="w-100 bg-light text-success py-3 rounded-lg">
              Go To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
