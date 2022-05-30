import React, { useState } from "react";
import "../assets/Login.css";
import { useNavigate, Navigate } from "react-router-dom";
import { auth } from "../firebase";
import db from "../firebase";
import { useStateValue } from "../StateProvider";
import { HashLink } from 'react-router-hash-link';

function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  const [{ user }, dispatch] = useStateValue();
  if (user) {
    return <Navigate to={"/orders"} />;
  }

  const register = (e) => {
    e.preventDefault();

    if (firstName.length > 3 ) {
      if (lastName.length > 3) {
        if (confirmPassword === password) {
          
          {
            email &&
              password &&
              db.collection("createdUsers").add({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
              });
          }

          auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
            //   it successfully created a new user with email and password
            console.log(auth);
            if (auth) {
              navigate('/', { replace: true })
            }
          })
          .catch((error) =>  setError(error.message));

        }
        else {
          setError("Passwords do not match");
        }
      } 
      else {
        setError("Last Name input too short")       
      }
  }
  else {
    setError("First Name input too short")  
  }     
}
  
  return (
    <div className="login">
      <HashLink to="/#">
        <h2 className="login__logo">Brighter Wash</h2>
      </HashLink>

      <div className="login__container">
        <h1>Sign Up</h1>

        <form>
          <h5>
            First Name <b>*</b>
          </h5>
          <input
            className="name"
            placeholder="John"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            minLength="4"
            required
          />

          <h5>
            Last Name <b>*</b>
          </h5>
          <input
            className="name"
            placeholder="Doe"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            minLength="4"
          />

          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            minLength="4"
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength="8"
          />
          <h5>Confirm Password</h5>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength="8"
          />

          <button
            type="submit"
            onClick={register}
            className="login__signInButton"
          >
            Sign Up
          </button>
        </form>

        <p className="disclaimer">
          <b>
            By Signing Up you agree to Brighter Wash's Terms & Conditions of Use
            and Operations.
          </b>
        </p>

        {error && 
        <h5 className="errorMessgae"> {error}</h5>}
      </div>
    </div>
  );
}

export default SignUp;
