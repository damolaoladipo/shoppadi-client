import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../api/axios";
import Title from "../../components/title/Title";
import TextInput from "../../components/input/TextInput";
import PasswordInput from "../../components/input/PasswordInput";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import { notification } from "antd";

const ForgotPassword = () => {
  const [form, setForm] = useState({
    email: "",
  });

  useEffect(() => {}, []);

  const forgotPasswordMutation = useMutation({
    mutationFn: (payload: any) => axiosAPI.auth.forgotPassword(payload),
    onSuccess: () => {
      notification.success({
        message: "Reset Email Sent!",
        description: "Please check your email to reset your password.",
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
    const { email } = form;

    if (!email) {
      notification.error({
        message: "Email is required.",
        description: undefined,
      });
      return;
    }

    await forgotPasswordMutation.mutate({ email });
  };

  return (
    <>
      <section 
            style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                minHeight: "100vh",
    
                 }}>
            
              <div className="auth-form"
               style={{
                backgroundColor: "#f0f0f0",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "#f8f8f8",
              }}
              >
                <Title
                  text="Forgot Your Password?"
                  color="brand-green"
                  size="fs-40"
                />
                <p className="fs-18 brand-gray font-dmsans">
                  Enter your email to receive password reset instructions.
                </p>

                <div className="mrgb2"></div>

                <div className="form login-form">
                  <TextInput
                    type="email"
                    hasIcon={true}
                    icon="fe-at-sign"
                    showFocus={true}
                    placeholder="Email Address"
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />

                  <div className="mrgb2"></div>

                  <Button text="Send Reset Email" onClick={handleSubmit}  />
                </div>
              </div>

      </section>
    </>
  );
};

export default ForgotPassword;
