import { Navbar } from "../../components";
import { Footer } from "../../components";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";

export const Login = () => {
  let navigate = useNavigate();
  // const location = useLocation();
  const [isToken, setIsToken] = useState(false);

  const loginHandler = async () => {
    try {
      let data = {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      };
      let loginapi = await axios.post("/api/auth/login", data);

      console.log(loginapi.data.encodedToken);
      localStorage.setItem("token", loginapi.data.encodedToken);
      setIsToken(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      {isToken ? (
        navigate(-1)
      ) : (
        <div class="login-form flex-row">
          <div class="form flex-col">
            <p class="h1">Login</p>

            <div class="first-input flex-col">
              <label for="email" class="h3">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
                size="30ch"
              />
            </div>

            <div class="first-input flex-col">
              <label for="password" class="h3">
                Password{" "}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                size="30ch"
              />
            </div>

            <div class="check-row flex-row">
              <input type="checkbox" />
              <p class="h4">Remember Me</p>
              <p class="h4 forgot">Forgot your password</p>
            </div>

            <div class="login-button">
              <button class="btn">
                <p class="h3">Log In</p>
              </button>
              <button class="btn" onClick={loginHandler}>
                <p class="h3">Guest Login</p>
              </button>
            </div>

            <Link to="/signup">
              <p class="h3">Create New Account &#8250;</p>
            </Link>
          </div>
        </div>
      )}
      <Footer />

      {/* Another Approach here */}

      {/* <Navbar />
      {isToken ? (
        <Navigate to="/login" state={{ from: location }} replace />
      ) : (
        <div class="login-form flex-row">
          <div class="form flex-col">
            <p class="h1">Login</p>

            <div class="first-input flex-col">
              <label for="email" class="h3">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter Email"
                size="30ch"
              />
            </div>

            <div class="first-input flex-col">
              <label for="password" class="h3">
                Password{" "}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                size="30ch"
              />
            </div>

            <div class="check-row flex-row">
              <input type="checkbox" />
              <p class="h4">Remember Me</p>
              <p class="h4 forgot">Forgot your password</p>
            </div>

            <div class="login-button">
              <button class="btn">
                <p class="h3">Log In</p>
              </button>
              <button class="btn" onClick={loginHandler}>
                <p class="h3">Guest Login</p>
              </button>
            </div>

            <Link to="/signup">
              <p class="h3">Create New Account &#8250;</p>
            </Link>
          </div>
        </div>
      )}
      <Footer /> */}
    </>
  );
};
