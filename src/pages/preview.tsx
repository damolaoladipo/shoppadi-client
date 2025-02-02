import React from 'react';
import SignupPage from './Authtest';
import Dashboard from './Dashboard/Homepage';
import ProductDetails from './Dashboard/Test';
import BillingAddress from '../layouts/BillingAddress';
import SideMenu from '../layouts/SideMenu';




const Preview: React.FC<any> = ({ Component}) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Preview</h3>
      <BillingAddress/>
    </div>
  );
};

export default Preview;
