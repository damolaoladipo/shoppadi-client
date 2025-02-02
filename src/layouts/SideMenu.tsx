import { SetStateAction, useEffect, useState } from 'react';

import { FiGrid, FiClock, FiHeart, FiShoppingCart, FiSettings, FiLogOut } from 'react-icons/fi';

const SideMenu = () => {

    const [activeItem, setActiveItem] = useState('Dashboard'); 

    const handleItemClick = (item: SetStateAction<string>) => {
      setActiveItem(item);
    };

    useEffect(() => {
    }, []);

    return (
        <>
  <div className="navigation-container">
      <h2>Navigation</h2>
      <ul className="navigation-list">
        <li 
          className={`navigation-item ${activeItem === 'Dashboard' ? 'active' : ''}`} 
          onClick={() => handleItemClick('Dashboard')}
        >
          <span className="icon">
            <FiGrid />
          </span>
          Dashboard
        </li>
        <li 
          className={`navigation-item ${activeItem === 'Order History' ? 'active' : ''}`} 
          onClick={() => handleItemClick('Order History')}
        >
          <span className="icon">
            <FiClock />
          </span>
          Order History
        </li>
        <li 
          className={`navigation-item ${activeItem === 'Wishlist' ? 'active' : ''}`} 
          onClick={() => handleItemClick('Wishlist')}
        >
          <span className="icon">
            <FiHeart />
          </span>
          Wishlist
        </li>
        <li 
          className={`navigation-item ${activeItem === 'Shopping Cart' ? 'active' : ''}`} 
          onClick={() => handleItemClick('Shopping Cart')}
        >
          <span className="icon">
            <FiShoppingCart />
          </span>
          Shopping Cart
        </li>
        <li 
          className={`navigation-item ${activeItem === 'Settings' ? 'active' : ''}`} 
          onClick={() => handleItemClick('Settings')}
        >
          <span className="icon">
            <FiSettings />
          </span>
          Settings
        </li>
        <li 
          className={`navigation-item ${activeItem === 'Log-out' ? 'active' : ''}`} 
          onClick={() => handleItemClick('Log-out')}
        >
          <span className="icon">
            <FiLogOut />
          </span>
          Log-out
        </li>
      </ul>
    </div>
        </>
    );
};

export default SideMenu;