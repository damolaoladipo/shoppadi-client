import React from 'react';
import SignupPage from './Authtest';
import Dashboard from './dashboard/Homepage';
import ProductDetails from './dashboard/Test';
import SideMenu from '../layouts/SideMenu';
import UploadProduct from '../layouts/UploadProduct';
import OrderList from './admin/OrderList';
import ProductUpload from './admin/ProductUpload';
import ProductList from './admin/ProductList';
import User from './dashboard/User';
import BillingInformation from './dashboard/Test';
import BillingAddress from './dashboard/UserSettings';
import ChangePassword from '../layouts/ChangePassword';




const Preview: React.FC<any> = ({ Component}) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Preview</h3>
      <BillingInformation />
      <BillingAddress/>
      <ChangePassword/>
    </div>
  );
};

export default Preview;
