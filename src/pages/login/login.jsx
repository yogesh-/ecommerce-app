import { Navbar } from "../../components";
import { Footer } from "../../components";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  let navigate = useNavigate();

  const [isToken, setIsToken] = useState(false);
  const [loginEmail, setLoginEmail] = useState();
  const [loginPwd, setLoginPwd] = useState();

  let userEmail = localStorage.getItem("userEmail");
  let userPwd = localStorage.getItem("userPwd");

  const loginHandler = async () => {
    try {
      if (loginEmail === userEmail && loginPwd === userPwd) {
        let loginData = {
          email: loginEmail,
          password: loginPwd,
        };

        let loginUser = await axios.post("/api/auth/login", loginData);
        localStorage.setItem("token", loginUser.data.encodedToken);
        setIsToken(true);
      } else {
        alert("Wrong Email and Password,try Again");
      }
    } catch (error) {
      console.log("error here", error);
    }
  };

  const loginHandlerGuest = async () => {
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
                onChange={(e) => setLoginEmail(e.target.value)}
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
                onChange={(e) => setLoginPwd(e.target.value)}
              />
            </div>

            {/* <div class="check-row flex-row">
              <input type="checkbox" />
              <p class="h4">Remember Me</p>
              <p class="h4 forgot">Forgot your password</p>
            </div> */}

            <div class="login-button">
              <button class="btn" onClick={loginHandler}>
                <p class="h3">Log In</p>
              </button>
              <button class="btn" onClick={loginHandlerGuest}>
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
    </>
  );
};
