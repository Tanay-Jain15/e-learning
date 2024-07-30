import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import SignUp from "./SignUp";
import AdminLogin from "./AdminLogin";
import Home from "./Home";
import Courses from "./Courses";
import AllCourses from "./AllCourses/AllCourses";
import isLoginHandler from "./utils/functions";
const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = isLoginHandler();
    if (login) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<AdminLogin />} />
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/all-courses" element={<AllCourses />} />
    </Routes>
  );
};

export default App;
