import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../api/axios";
import { notification } from "antd";
import TextInput from "../../components/input/TextInput";
import PasswordInput from "../../components/input/PasswordInput";
import Title from "../../components/title/Title";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const signupMutation = useMutation({
    mutationFn: (payload: any) => {
      return axiosAPI.auth.register(payload)
    },
    onSuccess: () => {
      notification.success({
        message: "Registration Successful!",
        description: "Your account has been created successfully.",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
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
    const { firstName, lastName, email, password } = form;

    if (!email || !password) {
      notification.error({
        message: "Email and password are required.",
        description: undefined,
      });
      return;
    }

    await signupMutation.mutate({ firstName, lastName, email, password });
  };

  return (
    <section
  
    
    >
      <div className="auth-container" >
        <div className="auth-container-inner"
        
        >
          <div className="pair right" 
          >
            <div className="hero-image">
                          <img 
                          id="heroImage" src={`${process.env.PUBLIC_URL}/images/assets/freshcart-bg.svg`} alt="fresh cart"/>
                    </div>
            </div>
            <div className="column-2">
              
          </div>

          <div className="pair left">
            <div className="auth-form">
              <Title
                text="Create Your Account"
                color="brand-green"
                size="fs-40"
              />
              <p className="fs-18 brand-gray font-dmsans">
                Setting up an account takes less than one minute
              </p>
              <div className="mrgb1"></div>
              <div className="form signup-form">
                <TextInput
                  type="text"
                  hasIcon={true}
                  icon="fe-user"
                  showFocus={true}
                  placeholder="First Name"
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                />

                <div className="pdl40"></div>

                <TextInput
                  type="text"
                  hasIcon={true}
                  icon="fe-user"
                  showFocus={true}
                  placeholder="Last Name"
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                />

                <div className="pdl40"></div>

                <TextInput
                  type="email"
                  hasIcon={true}
                  icon="fe-at-sign"
                  showFocus={true}
                  placeholder="Email Address"
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />

                <div className="pdl40"></div>

                <PasswordInput
                  hasIcon={true}
                  icon="fe-lock"
                  showFocus={true}
                  placeholder="Enter password"
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                />

                <div className="mrgb2"></div>

                <Button 
                text="Sign Up" 
                loading={signupMutation.isPending}
                onClick={handleSubmit} />
              </div>

              <div className="mrgb1"></div>

              
              <p style={{ textAlign: "center" }} className="fs-15 brand-gray font-dmsans">
                You already have an account?{" "}
                <Link to="/login" className="brand-green">
                  Login here
                </Link>
              </p>

              <div className="auth-divider mrgb1">
                <div className="line"></div>
                <span className="font-dmsans fs-15 brand-gray ui-absolute">
                  Or Continue with
                </span>
              </div>

              <div className="brand-icons">
                <IconButton
                  icon={{
                    type: "image",
                    url: "images/assets/facebook-logo.png",
                    name: "facebook logo",
                  }}
                />
                <div className="pdl1"></div>
                <IconButton
                  icon={{
                    type: "image",
                    url: "images/assets/apple-logo.png",
                    name: "apple logo",
                  }}
                />
                <div className="pdl1"></div>
                <IconButton
                  icon={{
                    type: "image",
                    url: "images/assets/google-logo.png",
                    name: "google logo",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
