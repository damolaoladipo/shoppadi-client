import React, { useState } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

const BillingAddress = () => {
  const [firstName, setFirstName] = useState('Dianne');
  const [lastName, setLastName] = useState('Dianne');
  const [company, setCompany] = useState('Zakirsoft');
  const [streetAddress, setStreetAddress] = useState('4140 Park');
  const [country, setCountry] = useState('United States');
  const [state, setState] = useState('Washington DC');
  const [zipCode, setZipCode] = useState('20033');
  const [email, setEmail] = useState('diainne.russell@gmail.com');
  const [phone, setPhone] = useState('(603) 555-0123');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedImage(files[0]);
    }
  };

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
      zipCode,
      email,
      phone,
      selectedImage,
    });
  };

  return (
    <Container>
      <h2 className="billing-info-title">Billing Address</h2>
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
          <Col md={4}>
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
          <Col md={4}>
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
          <Col md={4}>
            <Form.Group controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="20033"
              />
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

        <Form.Group controlId="imageUpload">
          <Form.Label>Choose Image</Form.Label>
          <Form.Control type="file" onChange={(e) => handleFileUpload(e as React.ChangeEvent<HTMLInputElement>)} />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default BillingAddress;

