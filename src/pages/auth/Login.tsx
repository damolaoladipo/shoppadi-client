import { useContext, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axiosAPI from "../../api/axios";
import Title from "../../components/title/Title";
import TextInput from "../../components/input/TextInput";
import PasswordInput from "../../components/input/PasswordInput";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import { notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthContext";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  useEffect(() => {}, []);

  const loginMutation = useMutation({
    mutationFn: (payload: any) => {
      return axiosAPI.auth.login(payload)
    },       
    onSuccess: async (data: any) => {
        localStorage.setItem(
        "authToken",
        JSON.stringify(data?.data?.data?.authToken)
      );
      dispatch({ type: "LOGIN", payload: data?.data?.data });
      navigate("/");     
    },
    onError: (error: any) => {
      notification.error({
        message: error.response.data.errors[0] ??
          error.response.data.message,
        description: undefined
      });
    },
  });

  const handleInputChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { email, password } = form;

    if (!email || !password) {
      notification.error({
        message: "Email and password are required.",
        description: undefined,
      });
      return;
    }

    await loginMutation.mutate(form);
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
                    id="email"
                    hasIcon={true}
                    icon="fe-at-sign"
                    showFocus={true}
                    placeholder="Email Address"
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />

                  <div className="pdl40"></div>

                  <PasswordInput
                    hasIcon={true}
                    id="password"
                    icon="fe-lock"
                    showFocus={true}
                    placeholder="Enter password"
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                  />

                  <div className="mrgb3"></div>

                  <Button 
                  text="Login" 
                  loading={loginMutation.isPending}
                  onClick={handleSubmit} />
                </div>

                <div className="mrgb2"></div>

                <p style={{ textAlign: "center" }} className="fs-15 brand-gray font-dmsans">
                  Don't have an account?{" "}
                  <Link to="/register" className="brand-green">
                    Register here
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
