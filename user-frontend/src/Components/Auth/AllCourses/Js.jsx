import React, { useState } from "react";
import { assets } from "../../../utils/assets.jsx";
import "./Courses.css";
import homeLogo from "../../../../public/assets/home_logo.jpg";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Js = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://youtu.be/qikxEIxsXco?si=-0rYmMlaUpGLvSMz"
  );

  const videoPlayer = (key) => {
    if (key === "BUTTON_1") {
      setVideoUrl("https://youtu.be/qikxEIxsXco?si=-0rYmMlaUpGLvSMz");
    } else if (key === "BUTTON_2") {
      setVideoUrl("'https://youtu.be/btj35dh3_U8?si=Hn7li4opBHVGOSqW");
    } else if (key === "BUTTON_3") {
      setVideoUrl("'https://youtu.be/6nv3qy3oNkc?si=CKqyhhtoaSotsPXI");
    }
  };
  return (
    <div className="BG4">
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
            <button onClick={() => videoPlayer("BUTTON_1")}>Closuers</button>
            <button onClick={() => videoPlayer("BUTTON_2")}>CallBacks</button>
            <button onClick={() => videoPlayer("BUTTON_3")}>
              Async & Await
            </button>
          </div>
          <div className="col-md-10">
            <h1>JavaScript</h1>
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
            <div className="person3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Js;
