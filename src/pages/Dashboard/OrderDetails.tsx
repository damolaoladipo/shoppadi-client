import React, { useState } from "react";
import Navigation from "../../layouts/Navigation";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import TextInput from "../../components/input/TextInput";
import CountryDropdown from "../../components/Filter/CountryDropdown";
import StateDropdown from "../../components/Filter/StateDropDown";
import { useMutation } from "@tanstack/react-query";
import { notification } from "antd";
import axiosAPI from "../../api/axios";
import { IBillingAddress } from "../../utils/freshcart.util";

const OrderDetails = () => {
  const [billingInfo, setBillingInfo] = useState<IBillingAddress>({
    firstName: "",
    lastName: "",
    company: "",
    streetAddress: "",
    country: "",
    state: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("FREE");
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (name: string, value: string) => {
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  const signupMutation = useMutation({
    mutationFn: (payload: IBillingAddress) => axiosAPI.auth.register(payload),
    onSuccess: () => {
      notification.success({
        message: "Registration Successful!",
        description: "Your billing address has been created successfully.",
      });
      setIsEditing(false);
    },
    onError: (error: any) => {
      notification.error({
        message:
          error.response?.data?.errors?.[0] ||
          error.response?.data?.message ||
          "An error occurred.",
        description: undefined,
      });
    },
  });

  const handleSubmit = async () => {
    await signupMutation.mutate(billingInfo);
  };

  return (
    <>
      <Navigation cartCount={0} handleCartToggle={() => {}} />
      <Container className="mt-5">
        <Row>
          {/* Billing Details */}
          <Col md={6} className="mb-4">
            <Card className="shadow-lg p-4 rounded">
              <Card.Body>
                <h4 className="mb-4">Billing Address</h4>
                {isEditing ? (
                  <div>
                    <Row>
                      <Col md={6}>
                        <TextInput
                          type="text"
                          placeholder="First Name"
                          value={billingInfo.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col md={6}>
                        <TextInput
                          type="text"
                          placeholder="Last Name"
                          value={billingInfo.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                        />
                      </Col>
                    </Row>
                    <TextInput
                      type="text"
                      placeholder="Company (Optional)"
                      value={billingInfo.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                    />
                    <TextInput
                      type="text"
                      placeholder="Street Address"
                      value={billingInfo.streetAddress}
                      onChange={(e) =>
                        handleInputChange("streetAddress", e.target.value)
                      }
                    />
                    <Row>
                      <Col md={6}>
                        <CountryDropdown
                          onChange={(selected: { value: string }) =>
                            handleInputChange("country", selected.value)
                          }
                        />
                      </Col>
                      <Col md={6}>
                        <StateDropdown
                          onChange={(selected: { value: string }) =>
                            handleInputChange("state", selected.value)
                          }
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <TextInput
                          type="text"
                          placeholder="Zip Code"
                          value={billingInfo.zipCode}
                          onChange={(e) =>
                            handleInputChange("zipCode", e.target.value)
                          }
                        />
                      </Col>
                      <Col md={6}>
                        <TextInput
                          type="text"
                          placeholder="Phone Number"
                          value={billingInfo.phoneNumber}
                          onChange={(e) =>
                            handleInputChange("phoneNumber", e.target.value)
                          }
                        />
                      </Col>
                    </Row>
                    <TextInput
                      type="email"
                      placeholder="Email Address"
                      value={billingInfo.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                    <Button
                      variant="success"
                      className="w-100 mt-3"
                      onClick={handleSubmit}
                    >
                      Save Billing Info
                    </Button>
                  </div>
                ) : (
                  <>
                    <div>
                      <Row>
                        <Col md={6}>
                          <TextInput
                            type="text"
                            placeholder="First Name"
                            value={billingInfo.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                          />
                        </Col>
                        <Col md={6}>
                          <TextInput
                            type="text"
                            placeholder="Last Name"
                            value={billingInfo.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                      <TextInput
                        type="text"
                        placeholder="Company (Optional)"
                        value={billingInfo.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                      />
                      <TextInput
                        type="text"
                        placeholder="Street Address"
                        value={billingInfo.streetAddress}
                        onChange={(e) =>
                          handleInputChange("streetAddress", e.target.value)
                        }
                      />
                      <Row>
                        <Col md={6}>
                          <CountryDropdown
                            onChange={(selected: { value: string }) =>
                              handleInputChange("country", selected.value)
                            }
                          />
                        </Col>
                        <Col md={6}>
                          <StateDropdown
                            onChange={(selected: { value: string }) =>
                              handleInputChange("state", selected.value)
                            }
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <TextInput
                            type="text"
                            placeholder="Zip Code"
                            value={billingInfo.zipCode}
                            onChange={(e) =>
                              handleInputChange("zipCode", e.target.value)
                            }
                          />
                        </Col>
                        <Col md={6}>
                          <TextInput
                            type="text"
                            placeholder="Phone Number"
                            value={billingInfo.phoneNumber}
                            onChange={(e) =>
                              handleInputChange("phoneNumber", e.target.value)
                            }
                          />
                        </Col>
                      </Row>
                      <TextInput
                        type="email"
                        placeholder="Email Address"
                        value={billingInfo.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                      />

                      <Button
                        variant="primary"
                        className="w-100 mt-3"
                        onClick={() => setIsEditing(true)}
                      >
                        Edit
                      </Button>
                    </div>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* Order Summary & Payment */}
          <Col md={6} className="mb-4">
            <Card className="shadow-lg p-4 rounded">
              <Card.Body>
                <h4 className="mb-4">Order Summary</h4>
                <p>
                  <strong>Items:</strong> 3
                </p>
                <p>
                  <strong>Total:</strong> $120.00
                </p>

                <h5 className="mt-4">Payment Method</h5>
                <Form>
                  <Form.Check
                    type="radio"
                    label="FREE"
                    name="paymentMethod"
                    value="FREE"
                    checked={paymentMethod === "FREE"}
                    onChange={() => setPaymentMethod("FREE")}
                  />
                  <Form.Check
                    type="radio"
                    label="Paystack"
                    name="paymentMethod"
                    value="Paystack"
                    checked={paymentMethod === "Paystack"}
                    onChange={() => setPaymentMethod("Paystack")}
                  />
                  <Form.Check
                    type="radio"
                    label="Flutterwave"
                    name="paymentMethod"
                    value="Flutterwave"
                    checked={paymentMethod === "Flutterwave"}
                    onChange={() => setPaymentMethod("Flutterwave")}
                  />
                </Form>
                <Button variant="success" className="w-100 mt-4">
                  Proceed to Payment
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderDetails;
