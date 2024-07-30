import React, { useEffect, useState } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import axios from "axios";
import "./SignUpForm.css";
import { getData } from "../../../api/api_calls";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    axios
      .post("http://localhost:5000/api/signup", formData)
      .then((response) => {
        setIsRegistered(true);
        setFormData({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      })
      .then((response) => {
        console.log("User signed up successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      });
  };

  const getSlash = async () => {
    const response = await getData();
    console.log(
      response,
      "<------------------------- This is the response from the backend"
    );
  };

  useEffect(() => {
    getSlash();
  }, []);

  return (
    <div className="box">
      <div className="user_information">
        <form onSubmit={handleSubmit}>
          <div className="values">
            <MdOutlineAdminPanelSettings style={{ fontSize: "40px" }} />
            <h6> Start your journey</h6>
            <h4>Sign Up to InsideLearner</h4>
            {isRegistered && (
              <p style={{ color: "gray", fontWeight: "bold" }}>
                Registration successful! Please <a href="/login">login</a>.
              </p>
            )}

            <div className="U">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="E">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="P">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="C">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Enter password agian"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit">Sign Up</button>
          <p style={{ color: "white", fontWeight: "bold" }}>
            Already have an account? <a href="/login">login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
