import { Navbar } from "../../components";
import { Footer } from "../../components";
import "./signup.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
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
              name="email"
              placeholder="First Name"
              size="25ch"
            />
          </div>

          <div class="first-input flex-col">
            <label for="fname" class="h3">
              Last Name
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Last Name"
              size="25ch"
            />
          </div>

          <div class="first-input flex-col">
            <label for="email" class="h3">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email"
              size="25ch"
            />
          </div>

          <div class="first-input flex-col pswd-bar">
            <label for="passwordone" class="h3">
              Password sdc{" "}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              size="25ch"
            />
            <span
              onclick="hideUnhide()"
              class="material-icons-outlined pswd-hide-icon"
            >
              hide_source
            </span>
          </div>

          <div class="first-input flex-col">
            <label for="password" class="h3">
              Confirm Password{" "}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Confirm Password"
              size="25ch"
            />
          </div>

          <div class="check-row flex-row">
            <input type="checkbox" />
            <p class="h4"> I accept Terms &#38; Conditions</p>
          </div>

          <button class="btn">
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
