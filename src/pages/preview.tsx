import React from 'react';
import SignupPage from './Authtest';



const Preview: React.FC<any> = ({ Component}) => {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Preview</h3>
      <SignupPage/>
    </div>
  );
};

export default Preview;
