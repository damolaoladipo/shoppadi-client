import React, { useState } from "react";
import { InputGroup, FormControl, Button, Card, Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface FormErrors {
  [key: string]: string;
}

const SignupPage: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formValues.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formValues.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formValues.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formValues.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = () => {
    if (validate()) {
      setSuccess(true);
      setFormValues({ firstName: "", lastName: "", email: "", password: "" });
      setErrors({});
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="container vh-100 d-flex align-items-center">
      <Row className="w-100">
        {/* Column 1: Image */}
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <img
            src="https://via.placeholder.com/500"
            alt="Signup illustration"
            className="img-fluid rounded"
          />
        </Col>

        {/* Column 2: Register */}
        <Col md={6}>
          <Card className="p-4 shadow rounded">
            <h2 className="text-center mb-4">Register</h2>

            {success && <Alert variant="success">Signup successful!</Alert>}

            <InputGroup className="mb-3">
              <FormControl
                id="firstName"
                placeholder="First Name"
                value={formValues.firstName}
                onChange={handleInputChange}
              />
            </InputGroup>
            {errors.firstName && <Alert variant="danger">{errors.firstName}</Alert>}

            <InputGroup className="mb-3">
              <FormControl
                id="lastName"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={handleInputChange}
              />
            </InputGroup>
            {errors.lastName && <Alert variant="danger">{errors.lastName}</Alert>}

            <InputGroup className="mb-3">
              <FormControl
                id="email"
                type="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </InputGroup>
            {errors.email && <Alert variant="danger">{errors.email}</Alert>}

            <InputGroup className="mb-3">
              <FormControl
                id="password"
                type="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleInputChange}
              />
            </InputGroup>
            {errors.password && <Alert variant="danger">{errors.password}</Alert>}

            <Button onClick={handleSubmit} className="w-100" variant="primary">
              Sign Up
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SignupPage;
