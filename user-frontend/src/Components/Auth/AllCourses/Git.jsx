import React, { useState } from "react";
import { assets } from "../../../utils/assets.jsx";
import "./Courses.css";
import homeLogo from "../../../../public/assets/home_logo.jpg";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Git = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://youtu.be/xJXgvr8bPes?si=ldJ5Rh6KxfQn8XwN"
  );

  const videoPlayer = (key) => {
    if (key === "BUTTON_1") {
      setVideoUrl("https://youtu.be/xJXgvr8bPes?si=ldJ5Rh6KxfQn8XwN");
    } else if (key === "BUTTON_2") {
      setVideoUrl("https://youtu.be/iGutIN5t9Mo?si=Qu5lIE5bY2bNwfdZ");
    } else if (key === "BUTTON_3") {
      setVideoUrl("https://youtu.be/PSJ63LULKHA?si=sgqa6atgi2XOOaYY");
    }
  };
  return (
    <div className="BG3">
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
              Git vs Github
            </button>
            <button onClick={() => videoPlayer("BUTTON_2")}>Git Bash</button>
            <button onClick={() => videoPlayer("BUTTON_3")}>
              Top 10 Git Commands
            </button>
          </div>
          <div className="col-md-10">
            <h1>Git</h1>
            <div className="inter_video">
              {videoUrl && (
                <ReactPlayer
                  url={videoUrl}
                  controls={true}
                  width="1000px"
                  height="500px"
                />
              )}
            </div>
            <div className="person4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Git;
