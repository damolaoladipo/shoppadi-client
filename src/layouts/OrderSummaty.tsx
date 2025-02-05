import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const OrderSummary = () => {
    useEffect(() => {
    }, []);

    return (
        <>
            <div className="order-summary">
      <div className="header">
        <div className="title">
          <h2>Order Details</h2>
          <span>April 24, 2021</span>
          <span>3 Products</span>
        </div>
        <a href="#" className="back-to-list">
          Back to List
        </a>
      </div>

      <Container>
        <Row>
          <Col md={6}>
            <div className="billing-address">
              <h4>BILLING ADDRESS</h4>
              <p>Dainne Russell</p>
              <p>4140 Parker Rd. Allentown, New Mexico</p>
              <p>31134</p>
              <p>EMAIL: dainne.ressell@gmail.com</p>
              <p>PHONE: (671) 555-0110</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="shipping-address">
              <h4>SHIPPING ADDRESS</h4>
              <p>Dainne Russell</p>
              <p>4140 Parker Rd. Allentown, New Mexico</p>
              <p>31134</p>
              <p>EMAIL: dainne.ressell@gmail.com</p>
              <p>PHONE: (671) 555-0110</p>
            </div>
            <div className="order-details">
              <div className="order-id">
                <span>ORDER ID:</span>
                <span>#4152</span>
              </div>
              <div className="payment-method">
                <span>PAYMENT METHOD:</span>
                <span>Paypal</span>
              </div>
              <div className="subtotal">
                <span>Subtotal:</span>
                <span>$365.00</span>
              </div>
              <div className="discount">
                <span>Discount:</span>
                <span>20%</span>
              </div>
              <div className="shipping">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="total">
                <span>Total:</span>
                <span>$84.00</span>
              </div>
            </div>
          </Col>
        </Row>

        <div className="order-status">
          <div className="status-item">
            <span className="status-number">01</span>
            <span className="status-text">Order received</span>
          </div>
          <div className="status-item">
            <span className="status-number">02</span>
            <span className="status-text">Processing</span>
          </div>
          <div className="status-item active">
            <span className="status-number">03</span>
            <span className="status-text">On the way</span>
          </div>
          <div className="status-item">
            <span className="status-number">04</span>
            <span className="status-text">Delivered</span>
          </div>
        </div>

        <div className="order-items">
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Red Capsicum</td>
                <td>$14.00</td>
                <td>x5</td>
                <td>$70.00</td>
              </tr>
              <tr>
                <td>Green Capsicum</td>
                <td>$14.00</td>
                <td>x2</td>
                <td>$28.00</td>
              </tr>
              <tr>
                <td>Green Chili</td>
                <td>$26.70</td>
                <td>x10</td>
                <td>$267.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
        </>
    );
};

export default OrderSummary;