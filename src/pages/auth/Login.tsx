import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../api/axios";
import Title from "../../components/title/Title";
import TextInput from "../../components/input/TextInput";
import PasswordInput from "../../components/input/PasswordInput";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import { notification } from "antd";

const Login = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {}, []);

  const signupMutation = useMutation({
    mutationFn: (payload: any) => axiosAPI.auth.register(payload),
    onSuccess: () => {
      notification.success({
        message: "Registration Successful!",
        description: "Your account has been created successfully.",
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
    <>
      <section>
        <div className="auth-container">
          <div className="auth-container-inner">

          <div className="pair right pd2">
          <div className="hero-image">
                          <img 
                          id="heroImage" src={`${process.env.PUBLIC_URL}/images/assets/freshcart-bg.svg`} className='  ' sizes='' alt="fresh cart"/>
                    </div>
            <div className="column-2">
              
            </div>
          </div>
          
            <div className="pair left">
              <div className="auth-form">
                <Title
                  text="Welcome back"
                  color="brand-green"
                  size="fs-40"
                />
                <p className="fs-18 brand-gray font-dmsans">
                Login into your account.
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

                  <div className="mrgb3"></div>

                  <Button text="Login" onClick={handleSubmit} />
                </div>

                <div className="mrgb2"></div>

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
                      name: "apple logo",
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
                      name: "apple logo",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
