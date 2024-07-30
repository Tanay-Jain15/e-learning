import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./AllCourses.css";

const AllCourses = () => {
  const location = useLocation();
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:8000/courses-list")
        .then((res) => {
          // console.log("ResponseCouses____ ", res);
          const query = location?.search?.replace("?course=", "");
          const records = res.data.records?.filter(
            (item) => item?.course?.toLowerCase() === query?.toLowerCase()
          );
          setCoursesList(records);
        })
        .catch((err) => console.log("Error ", err));
    })();
  }, []);

  console.log("Records___ ", coursesList);

  return (
    <div className="bg-div">
      <div className="course-head">
        {coursesList && coursesList.length > 0 && (
          <h1>{coursesList[0]?.course}</h1>
        )}
      </div>

      <div className="outer-div">
        {coursesList?.map((item) => {
          return (
            <div className="course-info">
              <div className="course-name">
                <p>Course Name: </p>
                <p>{item?.course}</p>
              </div>

              <div className="topic-name">
                <p>Topic Name: </p>
                <p>{item?.topic}</p>
              </div>
              <div className="url">
                <p>URL: </p>
                <a
                  target="_blank"
                  href={item?.url}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {item?.url}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllCourses;
