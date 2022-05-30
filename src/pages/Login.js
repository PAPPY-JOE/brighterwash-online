import React, { useState } from "react";
import "../assets/Login.css";
import { useNavigate, Navigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import firebase from "../firebase";
import { useStateValue } from "../StateProvider";
import { HashLink } from 'react-router-hash-link';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{ user }, dispatch] = useStateValue();
  if (user) {
    return <Navigate to={"/clean"} />;
  }

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/orders");
      })
      .catch((error) => alert(error.message));
  };

  const google = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;

        // The signed-in user info.
        var user = result.user;
        dispatch({
          type: "SET_USER",
          user: user,
        });
        // ...
        navigate("/orders");
      })
      .catch(function (error) {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // The email of the user's account used.
        // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      });
  };

  const register = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div className="login">
      <HashLink to="/#">
        <h2 className="login__logo">Brighter Wash</h2>
      </HashLink>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign-In
          </button>
        </form>
        <p className="disclaimer or__disclaimer">OR</p>

        <button className="login__signInButton google" onClick={google}>
          Sign In with Google
        </button>
        <p className="disclaimer">
          <b>
            By signing-in you agree to Brighter Wash's Terms & Conditions of Use
            and Operations
          </b>
          .
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Brighter Wash Account
        </button>
      </div>
    </div>
  );
}

export default Login;
