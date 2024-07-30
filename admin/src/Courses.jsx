// import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import "./Courses.css";
import { assets } from "./utils/assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import validator from "validator";

const Courses = () => {
  const navigate = useNavigate();
  // const languages = [
  //   { id: 1, name: "HTML" },
  //   { id: 2, name: "CSS" },
  //   { id: 3, name: "JavaScript" },
  //   { id: 4, name: "React" },
  //   { id: 5, name: "Git" },
  // ];

  // const [selectedCourse, setSelectedCourse] = useState("");
  // const [visibleSections, setVisibleSections] = useState([]);
  // const [modalUrl, setModalUrl] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [coursesList, setCoursesList] = useState([]);
  const technologies = ["HTML", "CSS", "JavaScript", "React", "Git"];
  const [formData, setFormData] = useState({});

  const handleSelectChange = (e) => {
    setFormData({ ...formData, course: e.target.value });
  };

  // const handleCourseChange = (e) => {
  //   setSelectedCourse(e.target.value);
  //   setVisibleSections([]); // It resets visible sections when a new course is selected
  // };

  // const handleAddSection = () => {
  //   const nextSection = coursesList.filter(
  //     (section) => section.course === selectedCourse
  //   )[visibleSections.length];
  //   if (nextSection) {
  //     setVisibleSections([...visibleSections, nextSection.id]);
  //   }
  // };

  // const handleRemoveSection = (id) => {
  //   setVisibleSections(visibleSections.filter((sectionId) => sectionId !== id));
  // };

  const handleSubmit = async () => {
    // const selectedSections = coursesList.filter((section) =>
    //   visibleSections.includes(section.id)
    // );
    // console.log(`Selected Course: ${selectedCourse}`);
    // console.log("Selected Sections:", selectedSections);
    await axios
      .post("http://localhost:8000/add-courses", { ...formData })
      .then((res) => {
        setFormData({
          course: "",
          topic: "",
          url: "",
        });
        alert(res?.data?.message);
      })
      .catch((err) => {
        console.log("Err ", err);
      });
  };
  const toLogIn = () => {
    navigate("/");
    localStorage.setItem("islogin", "");
  };

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  //   setModalUrl("");
  // };

  return (
    <>
      {/* <nav className="course-home-nav">
        <img src={assets.LoginHeaderImg} alt="logo" className="intro-logo-2" />
      </nav> */}
      <img src={assets.LoginHeaderImg} alt="logo" className="intro-logo-2" />
      <div className="outer-sec">
        <section className="model">
          <img src={assets.HomeElearnImg} alt="logo" className="elearn-logo" />

          <form className="inside-add">
            <div className="dropdown">
              <label>Course: </label>
              <select
                value={formData.course || ""}
                onChange={handleSelectChange}
              >
                <option value="" disabled>
                  Select a Course
                </option>
                {technologies.map((tech, index) => (
                  <option key={index} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>
            {/* <input
              placeholder="Enter Course Name"
              value={formData?.course}
              onChange={(e) =>
                setFormData({ ...formData, course: e.target.value })
              }
            /> */}
            {/* <br /> <br /> */}
            <div className="topic">
              <label>Topic: </label>
              <input
                placeholder="Enter Topic Name"
                value={formData?.topic}
                onChange={(e) =>
                  setFormData({ ...formData, topic: e.target.value })
                }
              />
            </div>
            <br />
            <div className="course-url">
              <label>URL: </label>
              <input
                placeholder="Enter URL"
                value={formData?.url}
                onChange={(e) =>
                  setFormData({ ...formData, url: e.target.value })
                }
              />
            </div>
          </form>
          <button className="sbt-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="out-btn" onClick={toLogIn}>
            Log Out
          </button>
        </section>
      </div>

      {/* {isModalOpen && (
        <div className="modal-overlay show">
          <div className="modal">
            <button className="modal-close" onClick={handleModalClose}>
              &times;
            </button>
            <iframe
              src={modalUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            ></iframe>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Courses;
