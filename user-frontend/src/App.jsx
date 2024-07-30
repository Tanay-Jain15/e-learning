import React, { useEffect, useState } from "react";
import AdminLogin from "./Admin";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import "./Admin";
import LoginForm from "./Components/Auth/LoginForm/LoginForm";
import Page from "./Components/Auth/LoginForm/Page";
import React1 from "./Components/Auth/AllCourses/React";
import SignUpForm from "./Components/Auth/LoginForm/SignUpForm";
import Js from "./Components/Auth/AllCourses/Js";
import Html from "./Components/Auth/AllCourses/Html";
import Git from "./Components/Auth/AllCourses/Git";
import HomePage from "../src/Components/Auth/HomePage/homepage";
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem("islogin");
    if (isLogin) {
      navigate("/path");
    } else {
      navigate("/homepage");
    }
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/path" element={<Page />} />
          <Route path="/react" element={<React1 />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/js" element={<Js />} />
          <Route path="/html" element={<Html />} />
          <Route path="/git" element={<Git />} />
          <Route exact path="/" component={<Page />} />
          <Route path="/react" component={<React1 />} />
          <Route exact path="/" component={<Page />} />
          <Route path="/html" component={<Html />} />
          <Route exact path="/" component={<Page />} />
          <Route path="/git" component={<Git />} />
          <Route exact path="/" component={<Page />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
