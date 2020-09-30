import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <div className="banner">
        <div className="header">
          <h1>MOM'S BEST BACK TO LOL TRIVIA CONTEST</h1>
          <h3>
            <span id="ast">**</span>Select a Category below based on your Age
            <span id="ast">**</span>
          </h3>
        </div>
        <div className="select">
          <Link to="/details?category=easy">
            <div className="level-box">
              <strong>
                EASY <span>(AGE 3 - 7)</span>
              </strong>
            </div>
          </Link>
          <Link to="/details?category=intermediate">
            <div className="level-box">
              <strong>
                INTERMEDIATE <span>(AGE 8 - 12)</span>
              </strong>
            </div>
          </Link>
          <Link to="/details?category=advanced">
            <div className="level-box">
              <strong>
                ADVANCED <span>(AGE 13 - 18)</span>
              </strong>
            </div>
          </Link>
        </div>
        <p id="footer">Built by Joseph Godwin</p>
      </div>
    </div>
  );
};

export default Landing;
