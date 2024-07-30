import React, { useState } from "react";
import { assets } from "../../../utils/assets.jsx";
import "./Courses.css";
import homeLogo from "../../../../public/assets/home_logo.jpg";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const React1 = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://youtu.be/Y6aYx_KKM7A?si=UwMfZvwAdzkUfrP5"
  );

  const videoPlayer = (key) => {
    if (key === "BUTTON_1") {
      setVideoUrl("https://youtu.be/Y6aYx_KKM7A?si=UwMfZvwAdzkUfrP5");
    } else if (key === "BUTTON_2") {
      setVideoUrl("https://youtu.be/1N_Vh0bRK3c?si=XMVtsUPCEdsOwoOS");
    } else if (key === "BUTTON_3") {
      setVideoUrl("https://youtu.be/SS1I7m-G2kk?si=4umcI412mxew6479");
    }
  };
  return (
    <div className="BG1">
      <div style={{ border: "solid 2px ", width: "100vw" }}>
        <div style={{ border: "solid 2px " }} className="Name">
          <nav className="home-nav-c">
            <img src={assets.LOGO} alt="Logo" className="intro-logo" />
            <Link className="Home_conatin" to="/path">
              <img src={homeLogo} alt="Home Logo" className="home_logo" />
            </Link>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-2">
            <button onClick={() => videoPlayer("BUTTON_1")}>
              Introduction to React
            </button>
            <button onClick={() => videoPlayer("BUTTON_2")}>
              Routing in React
            </button>
            <button onClick={() => videoPlayer("BUTTON_3")}>
              Hooks in React
            </button>
          </div>
          <div className="col-md-10">
            <div className="inter_video">
              <div>
                {videoUrl && (
                  <ReactPlayer
                    url={videoUrl}
                    controls={true}
                    width="1000px"
                    height="500px"
                  />
                )}
              </div>
            </div>
            <div className="person1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React1;
