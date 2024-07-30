import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { assets } from "./utils/assets";
import { Snackbar } from "@mui/material";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    if (username && password) {
      e.preventDefault();
      console.log("Username:", username);
      console.log("Password:", password);
      try {
        axios
          .post("http://localhost:8000/signup", {
            username,
            password,
          })
          .then((res) => {
            console.log("response ", res);
            if (res.data === "exist") {
              alert("User already exists. Please try different entry.");
            } else {
              navigate("/");
            }
          })
          .catch((err) => {
            alert("Wrong Details");
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error");
      setError(true);
    }
  };
  const toLogIn = () => {
    navigate("/");
    localStorage.setItem("islogin", "");
  };
  // const handleClose = () => {
  //   setError(false);
  // };
  return (
    <div className="signup-pg">
      <div id="loader">
        <div id="box"></div>
        <div id="hill"></div>
      </div>
      <div className="container">
        <div className="intro">
          <img
            src={assets.LoginHeaderImg}
            alt="logo"
            className="intro-logo-1"
          />
          <h2 className="admin">Admin SignUp</h2>
          <div className="inter-intro">
            <form
              className="login-form"
              action="http://localhost:8000/login"
              method="POST"
            >
              <div className="user-part">
                <label>Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder=" Username"
                  required
                />
              </div>

              <br />
              <br />

              <div className="pass-part">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=" Password"
                  required
                />
              </div>

              <div className="button-container">
                <button className="my-button" onClick={handleLogin}>
                  SignUp
                </button>
              </div>
              <div className="button-container">
                <button className="my-button" onClick={toLogIn}>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        message="please fill the details..!"
        ContentProps={{
          sx: {
            color: "black",
            background: "lightcoral",
          },
        }}
      /> */}
    </div>
  );
};

export default SignUp;
