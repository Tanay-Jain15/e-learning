import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { assets } from "./utils/assets";
import isLoginHandler from "./utils/functions";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/courses");
  };

  const toLogIn = () => {
    navigate("/");
    localStorage.setItem("islogin", "");
  };

  const handleRouteChange = (course) => {
    navigate(`/all-courses?course=${course}`);
  };

  return (
    <>
      {/* <nav className="home-nav">
        <img src={assets.LoginHeaderImg} alt="logo" className="intro-logo-2" />
        <h1 className="nav-head">Welcome to Courses</h1>
      </nav> */}
      <section className="partition">
        <div className="part-one">
          <img
            src={assets.LoginHeaderImg}
            alt="logo"
            className="intro-logo-2"
          />

          <h1 className="quote">
            "Teacher's Can Open The Door, But You Must Enter It Yourself"
          </h1>
          <button className="course-btn" onClick={handleClick}>
            ADD Courses
          </button>
          <br />
          <br />
          <button className="price-btn" onClick={toLogIn}>
            Log Out
          </button>
        </div>

        <div className="part-two">
          <h2 className="two-head">Available Courses</h2>
          <div className="course-boxes-1">
            <div className="box-1" onClick={() => handleRouteChange("html")}>
              {/* <h3>HTML, CSS</h3> */}
              {/* <hr /> */}
              <img src={assets.HomeHTMLCSSImg} alt="image" />
            </div>

            <div
              className="box-2"
              onClick={() => handleRouteChange("javascript")}
            >
              {/* <h3>JavaScript</h3> */}
              {/* <hr /> */}
              <img src={assets.HomeJavaScriptImg} alt="image" />
            </div>
          </div>

          {/* ****************************************************************************************************** */}

          <div className="course-boxes-3">
            <div className="box-5" onClick={() => handleRouteChange("css")}>
              {/* <h3>CSS</h3> */}
              <img src={assets.HomeCSSImg} alt="image" />
            </div>
          </div>

          {/* ************************************************************************************************************* */}

          <div className="course-boxes-2">
            <div className="box-3" onClick={() => handleRouteChange("react")}>
              {/* <h3>React JS</h3> */}
              {/* <hr /> */}
              <img src={assets.HomeReactImg} alt="image" />
            </div>

            <div className="box-4" onClick={() => handleRouteChange("git")}>
              {/* <h3>Git</h3> */}
              {/* <hr /> */}
              <img src={assets.HomeGitImg} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
