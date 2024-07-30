import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import { assets } from "../../../utils/assets";

const HomePage = () => {
  return (
    <div className="homepage-background">
      <div className="homepage">
        <header className="header">
          <nav className="navbar">
            <ul>
              <img
                src={assets?.LOGO}
                alt="Logo"
                className="intro-logo-homepage"
              />
              <div className="name-of-website">
                <h2> INSIDE LEARNER</h2>
              </div>
              <div className="info-about-us">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </div>
            </ul>
          </nav>
        </header>
        <main className="main-content">
          <div className="first-home">
            <div className="welcome-section">
              <div className="text-content">
                <h1 className="welcome">Welcome to InsideLearner</h1>
                <h2>Your journey to web development starts here!</h2>
              </div>
              <div className="homepage-image"></div>
            </div>
          </div>
        </main>
        <footer className="footer">
          <p>&copy; 2024 InsideLearner. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
