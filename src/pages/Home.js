import React from "react";
import img1 from "../images/study 1 (1).jpg";

const Home = () => {
  return (
    <>
      {/* Navbar section */}
      <div className="navBar">
        <h1>SONGBIRD</h1>
        <button>Contact Us</button>
      </div>

      {/* Hero section */}
      <div className="hero">
        <div>
          <h1>STUDY, WORKOUT, AND CHILL TOGETHER</h1>
          <p>
            MEET PEOPLE IN COMMUNITIES WHICH COMBINE AESTHETIC ART AND MUSIC FOR
            YOUR FAVORITE ACTIVITIES .
          </p>
        </div>

        <div className="buttonDiv">
          <button>
            <i className="fab fa-apple"></i> App Store
          </button>
          <button>
            <i className="fab fa-google-play"></i> Google Play
          </button>
        </div>
      </div>

      {/* Main section */}
      <div className="main">
        <img
          className="image"
          src={img1}
          alt=""
          width="1400px"
          height="465px"
        />
      </div>

      {/* Footer section */}
      <div className="footer">
        <div className="footerPart1">
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div className="footerPart2">
          <i className="far fa-bell"></i>
          <i className="fas fa-music"></i>
          <i className="fab fa-instagram-square"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </>
  );
};

export default Home;
