import React from "react";
import img1 from "../images/study 1 (1).jpg";

const Home = () => {
  return (
    <>
      <div className="navBar">
        <h1>SONGBIRD</h1>
        <button>Contact Us</button>
      </div>
      <div className="hero">
        <div>
          <h1>STUDY, WORKOUT, AND CHILL TOGETHER</h1>
          <p>
            MEET PEOPLE IN COMMUNITIES WHICH COMBINE AESTHETIC ART AND MUSIC FOR
            YOUR FAVORITE ACTIVITIES .
          </p>
        </div>

        <div>
          <button>
            <i className="fab fa-apple"></i> App Store
          </button>
          <button>
            <i className="fab fa-google-play"></i> Google Play
          </button>
        </div>
      </div>

      <div className="main">
        <img
          className="image"
          src={img1}
          alt=""
          style={{ width: "1400px", height: "470px" }}
        />
      </div>

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
