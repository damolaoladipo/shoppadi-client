import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './UserDetails.css';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const UserDetails = ({ user }: { user: User }) => {
  // Assuming 'user' prop is an object with user data
  const { firstName, lastName, email, phoneNumber } = user;

  return (
    <Container>
      <h2>User Details</h2>
      <Row>
        <Col md={6}>
          <div className="user-detail">
            <span>First Name:</span>
            <span>{firstName}</span>
          </div>
        </Col>
        <Col md={6}>
          <div className="user-detail">
            <span>Last Name:</span>
            <span>{lastName}</span>
          </div>
        </Col>
      </Row>
      <div className="user-detail">
        <span>Email:</span>
        <span>{email}</span>
      </div>
      <div className="user-detail">
        <span>Phone Number:</span>
        <span>{phoneNumber}</span>
      </div>
    </Container>
  );
};

export default UserDetails;