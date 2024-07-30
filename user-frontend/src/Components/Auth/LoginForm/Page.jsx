import React, { useState } from "react";
import { assets } from "../../../utils/assets";
import "./Page.css";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import settinglogo from "../../../../public/assets/set_logo.png";
import { Link } from "react-router-dom";
import isLoginHandler from "../../../utils/function";

const Page = () => {
  const navigate = useNavigate();
  const [isAllCoursesDialogOpen, setIsAllCoursesDialogOpen] = useState(false);
  const [isSettingDialogOpen, setIsSettingDialogOpen] = useState(false);

  const closeAllCoursesDialog = () => {
    setIsAllCoursesDialogOpen(false);
  };

  const handleAllCoursesClick = () => {
    setIsAllCoursesDialogOpen(true);
  };

  const closeSettingDialog = () => {
    setIsSettingDialogOpen(false);
  };

  const handleSettingClick = () => {
    setIsSettingDialogOpen(true);
  };

  const handleLogout = () => {
    navigate("/homepage");
    localStorage.setItem("islogin", "");
    setIsSettingDialogOpen(false);
  };

  const handleClick = (route) => {
    navigate(`/${route}`);
    setIsAllCoursesDialogOpen(false);
  };

  return (
    <>
      <div className="contain">
        <nav className="home-nav">
          <img src={assets?.LOGO} alt="Logo" className="intro-logo" />
          <div className="button-container">
            <button className="coursesButton" onClick={handleAllCoursesClick}>
              All Courses
            </button>
            <button className="coursesButton" onClick={() => {}}>
              My Courses
            </button>
          </div>
          <Link className="Setting_conatin" to="#">
            <img
              src={settinglogo}
              alt="Setting Logo"
              className="setting_logo"
              onClick={handleSettingClick}
            />
          </Link>
        </nav>
      </div>

      <div>
        <br />
        <h1 className="quote">
          "Empowering learners with the tools to master full stack development,
          one course at a time."
        </h1>
      </div>
      <div className="person"></div>

      <Dialog
        className="custom-dialog"
        open={isAllCoursesDialogOpen}
        onClose={closeAllCoursesDialog}
        sx={{ width: "100vw !important" }}
        PaperProps={{ className: "paperPropClass" }}
      >
        <DialogTitle className="custom-title">
          All Courses Available{" "}
        </DialogTitle>
        <DialogContent>
          <div className="custom-window1 a">
            {
              <p>
                <button onClick={() => handleClick("react")}></button>
              </p>
            }
          </div>
          <div className="custom-window1 b">
            {
              <p>
                <button onClick={() => handleClick("html")}></button>
              </p>
            }
          </div>
          <div className="custom-window1 c">
            {
              <p>
                <button onClick={() => handleClick("git")}></button>
              </p>
            }
          </div>
          <div className="custom-window1 d">
            {
              <p>
                <button onClick={() => handleClick("js")}></button>
              </p>
            }
          </div>

          {/* <p>React, HTML CSS, JS, Git</p> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAllCoursesDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <div className="D2"></div>
      <Dialog
        open={isSettingDialogOpen}
        onClose={closeSettingDialog}
        maxWidth="sm"
        fullWidth
        sx={{
          "& .MuiDialogTitle-root": {
            backgroundColor: "black",
            color: "#fff",
          },
          "& .MuiDialogContent-root": {
            padding: "20px",
          },
          "& .MuiDialogActions-root": {
            padding: "15px 20px",
            backgroundColor: "light gray",
          },
        }}
      >
        <DialogTitle>Logout</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to logout?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeSettingDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogout} color="primary">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Page;
