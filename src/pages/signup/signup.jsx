import { Navbar } from "../../components";
import { Footer } from "../../components";
import "./signup.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const initialFormData = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const [inputData, setInputData] = useState({ initialFormData });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputData((values) => ({ ...values, [name]: value }));
  };

  const formValidation = () => {
    // check no empty field
    for (let keys in inputData) {
      if (inputData[keys] === "") {
        alert("Please fill all the details");
        return false;
      }
    }

    // email regex
    let regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(inputData.email)) {
      alert("Enter a valid email");

      return false;
    }

    // password match

    if (inputData.password !== inputData.cpassword) {
      alert("Passwords dont match");

      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formValidation();
    if (formValidation()) {
      (async () => {
        try {
          const response = await axios.post(`/api/auth/signup`, {
            firstName: inputData.fname,
            lastName: inputData.lname,
            email: inputData.email,
            password: inputData.password,
          });

          localStorage.setItem("userEmail", response.data.createdUser.email);
          localStorage.setItem("userPwd", response.data.createdUser.password);
          // let userEmail = localStorage.getItem("userEmail");
          // let userPwd = localStorage.getItem("userPwd");
          // console.log("getUser", userEmail, userPwd);
          // saving the encodedToken in the localStorage
          localStorage.setItem("token", response.data.encodedToken);
          let signToken = localStorage.getItem("token");
          if (signToken) {
            navigate("/");
          }
          console.log(signToken);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  return (
    <>
      <Navbar />

      <div class="login-form signup-form lex-row">
        <div class="form flex-col">
          <p class="h1">Sign Up</p>

          <div class="first-input flex-col">
            <label for="fname" class="h3">
              First Name
            </label>
            <input
              type="text"
              id="email"
              name="fname"
              placeholder="First Name"
              size="25ch"
              value={inputData.fname}
              onChange={handleChange}
              required
            />
          </div>

          <div class="first-input flex-col">
            <label for="fname" class="h3">
              Last Name
            </label>
            <input
              type="text"
              id="email"
              name="lname"
              placeholder="Last Name"
              size="25ch"
              value={inputData.lname}
              onChange={handleChange}
              required
            />
          </div>

          <div class="first-input flex-col">
            <label for="email" class="h3">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              size="25ch"
              value={inputData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div class="first-input flex-col pswd-bar">
            <label for="passwordone" class="h3">
              Password{" "}
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password"
              size="25ch"
              value={inputData.password}
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              class="material-symbols-outlined pswd-hide-icon"
            >
              {showPassword ? "visibility" : "visibility_off"}
            </span>
          </div>

          <div class="first-input flex-col">
            <label for="password" class="h3">
              Confirm Password{" "}
            </label>
            <input
              type="password"
              id="password"
              name="cpassword"
              placeholder="Confirm Password"
              size="25ch"
              value={inputData.cpassword}
              onChange={handleChange}
              required
            />
          </div>

          <div class="check-row flex-row">
            <input type="checkbox" required />
            <p class="h4"> I accept Terms &#38; Conditions</p>
          </div>

          <button class="btn" onClick={handleSubmit}>
            <p class="h3">Create New Account</p>
          </button>

          <Link to="/Login">
            <p class="h3">Already have an account &#8250;</p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
