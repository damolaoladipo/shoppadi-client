import React, { useState } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

const BillingInformation = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [orderNotes, setOrderNotes] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      firstName,
      lastName,
      company,
      streetAddress,
      country,
      state,
      email,
      phone,
      shipToDifferentAddress,
      orderNotes,
    });
  };

  return (
    <Container>
      <h2 className="billing-info-title">Billing Information</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={4}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Your last name"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group controlId="company">
              <Form.Label>Company Name (Optional)</Form.Label>
              <Form.Control
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company name"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="streetAddress">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            placeholder="Street Address"
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group controlId="country">
              <Form.Label>Country / Region</Form.Label>
              <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="">Select</option>
                {/* Add country options here */}
                <option value="United States">United States</option>
                {/* ... other countries */}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Select value={state} onChange={(e) => setState(e.target.value)}>
                <option value="">Select</option>
                {/* Add state options here */}
                <option value="Washington DC">Washington DC</option>
                {/* ... other states */}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="form-check">
          <Form.Check
            type="checkbox"
            id="shipToDifferentAddress"
            label="Ship to a different address"
            checked={shipToDifferentAddress}
            onChange={() => setShipToDifferentAddress(!shipToDifferentAddress)}
          />
        </div>

        <h2 className="additional-info-title">Additional Info</h2>

        <Form.Group controlId="orderNotes">
          <Form.Label>Order Notes (Optional)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={orderNotes}
            onChange={(e) => setOrderNotes(e.target.value)}
            placeholder="Notes about your order, e.g. special notes for delivery"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default BillingInformation;