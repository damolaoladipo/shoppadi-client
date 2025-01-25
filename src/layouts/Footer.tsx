import React, { useState } from 'react';

const Footer = () => {

  const [isMyAccountOpen, setIsMyAccountOpen] = useState(false);
  const [isHelpsOpen, setIsHelpsOpen] = useState(false);
  const [isProxyOpen, setIsProxyOpen] = useState(false);

  const toggleMyAccount = () => {
    setIsMyAccountOpen(!isMyAccountOpen);
  };

  const toggleHelps = () => {
    setIsHelpsOpen(!isHelpsOpen);
  };

  const toggleProxy = () => {
    setIsProxyOpen(!isProxyOpen);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <img src="/logo.svg" alt="Ecobazar" />
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4 onClick={toggleMyAccount}>My Account</h4>
              <ul className={`dropdown ${isMyAccountOpen ? 'open' : ''}`}>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Order History</a></li>
                <li><a href="#">Wishlist</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4 onClick={toggleHelps}>Helps</h4>
              <ul className={`dropdown ${isHelpsOpen ? 'open' : ''}`}>
                <li><a href="#">Store Info</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4 onClick={toggleProxy}>Proxy</h4>
              <ul className={`dropdown ${isProxyOpen ? 'open' : ''}`}>
                <li><a href="#">About</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Track Order</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4>Download Mobile App</h4>
              <div className="app-stores">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/app-store.svg" alt="App Store" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/google-play.svg" alt="Google Play" />
                </a>
              </div>
            </div>
          </div>

          <div className="social-media">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>

          <p className="copyright">
            Ecobazar Commerce © 2023. All Rights Reserved.
          </p>

          <div className="payment-methods">
            <img src="/visa.svg" alt="Visa" />
            <img src="/mastercard.svg" alt="Mastercard" />
            <img src="/paypal.svg" alt="PayPal" />
            <img src="/american-express.svg" alt="American Express" />
            <img src="/discover.svg" alt="Discover" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
