import { useState, useEffect } from "react";
import TextInput from "../components/input/TextInput";
import CountryDropdown from "../components/Filter/CountryDropdown";
import StateDropdown from "../components/Filter/StateDropDown";
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../api/axios";
import { notification } from "antd";
import { IBillingAddress } from "../utils/freshcart.util";
import Button from "../components/Button/Button";

const BillingAddress = () => {
  const [form, setForm] = useState<IBillingAddress>({
    firstName: "",
    lastName: "",
    company: "",
    streetAddress: "",
    country: "", 
    state: "",
    zipCode: "",
    email: "",
    phoneNumber: ""
  });

  const signupMutation = useMutation({
    mutationFn: (payload: IBillingAddress) => axiosAPI.auth.register(payload),
    onSuccess: () => {
      notification.success({
        message: "Registration Successful!",
        description: "Your billing address has been created successfully.",
      });
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

  const handleInputChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { firstName, lastName, company, state, country, streetAddress,  zipCode, email, phoneNumber } = form;


    await signupMutation.mutate({
      firstName, 
      lastName, 
      country, 
      streetAddress, 
      zipCode, 
      company,
      state,
      email, 
      phoneNumber,
    });
  };

  useEffect(() => {}, []);

  return (
    <>
    <div className="billing-address-container">
      <h3>Billing Address</h3>
  
      <div className="address-details">
        {/* Row: First Name, Last Name, Company */}
        <div className="row">
          <div className="col-md-4">
            <TextInput
              type="text"
              hasIcon
              icon="fe-user"
              showFocus
              placeholder="First Name"
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </div>
  
          <div className="col-md-4">
            <TextInput
              type="text"
              hasIcon
              icon="fe-user"
              showFocus
              placeholder="Last Name"
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </div>
  
          <div className="col-md-4">
            <TextInput
              type="text"
              hasIcon
              icon="fe-briefcase"
              showFocus
              placeholder="Company (Optional)"
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
          </div>
        </div>
  
        {/* Row: Street Address */}
        <div className="row">
          <div className="col-md-12">
            <TextInput
              type="text"
              hasIcon
              icon="fe-location"
              showFocus
              placeholder="Street Address"
              onChange={(e) => handleInputChange("streetAddress", e.target.value)}
            />
          </div>
        </div>
  
        {/* Row: Country, State, Zip Code */}
        <div className="row">
          <div className="col-md-4">
            <CountryDropdown
              onChange={(selected: { value: string; }) => handleInputChange("country", selected.value)}
            />
          </div>
  
          <div className="col-md-4">
            <StateDropdown
              onChange={(selected: { value: string; }) => handleInputChange("state", selected.value)}
            />
          </div>
  
          <div className="col-md-4">
            <TextInput
              type="text"
              hasIcon
              icon="fe-zip"
              showFocus
              placeholder="Zip Code"
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
            />
          </div>
        </div>
  
        {/* Row: Email Address, Phone Number */}
        <div className="row">
          <div className="col-md-6">
            <TextInput
              type="email"
              hasIcon
              icon="fe-at-sign"
              showFocus
              placeholder="Email Address"
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
  
          <div className="col-md-6">
            <TextInput
              type="text"
              hasIcon
              icon="fe-phone"
              showFocus
              placeholder="Phone Number"
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            />
          </div>
        </div>
  
        {/* Save Changes Button */}
        <div className="text-center">
          <Button onClick={handleSubmit} text="Save Changes" />
        </div>
      </div>
    </div>
  </>
  )  
};

export default BillingAddress;
