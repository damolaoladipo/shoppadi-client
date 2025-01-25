import React from 'react';
import SignupPage from './Authtest';
import Dashboard from './Dashboard/Homepage';
import ProductDetails from './Dashboard/Test';




const Preview: React.FC<any> = ({ Component}) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Preview</h3>
      <ProductDetails/>
    </div>
  );
};

export default Preview;
