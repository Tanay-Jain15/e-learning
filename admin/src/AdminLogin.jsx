import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import { assets } from "./utils/assets";
// import { Snackbar } from "@mui/material";
import axios from "axios";
import isLoginHandler from "./utils/functions";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    if (username && password) {
      e.preventDefault();
      const payload = {
        username: username,
        password: password,
      };
      console.log("Username:", username);
      console.log("Password:", password);

      try {
        axios
          .post("http://localhost:8000/login", payload)
          .then((res) => {
            if (res.data == "exist") {
              localStorage.setItem("islogin", true);
              navigate("/home");
            } else if (res.data == "not exist") {
              alert("User is not registerd");
            }
          })
          .catch((err) => {
            // alert("Wrong Details");
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

  const handlesignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-pg">
      <div className="container">
        <div className="intro">
          <img
            src={assets.LoginHeaderImg}
            alt="logo"
            className="intro-logo-1"
          />
          <h2 className="admin">Admin Login</h2>
          <div className="inter-intro">
            <form className="login-form">
              <div className="U-P">
                <div className="user-label">
                  <label>Username</label>
                </div>

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder=" Username"
                  required
                />
                <br />
                <br />
                <div className="set-pass">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=" Password"
                    required
                  />
                </div>
              </div>

              <div className="button-container">
                <button className="my-button" onClick={handleLogin}>
                  Login
                </button>
              </div>

              <div className="signup-button-container">
                <button className="signup-button" onClick={handlesignup}>
                  Signup
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

export default AdminLogin;
