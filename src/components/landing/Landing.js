import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  const handleEasyCategory = () => {};
  const handleIntermediateCategory = () => {};
  const handleAdvancedCategory = () => {};

  return (
    <div>
      <div className="banner-landing">
        <div>
          <h1>MOM'S BEST BACK TO LOL TRIVIA CONTEST</h1>
          <h3>**Select a Category below based on your age**</h3>
        </div>
        <div className="select">
          <Link to="/details?category=easy">
            <div className="level-box" onClick={handleEasyCategory}>
              <p>
                <h2>EASY</h2>
                <span>(AGE 3 - 7)</span>
              </p>
            </div>
          </Link>
          <Link to="/details?category=intermediate">
            <div className="level-box" onClick={handleIntermediateCategory}>
              <p>
                <h2>INTERMEDIATE</h2>
                <span>(AGE 8 - 12)</span>
              </p>
            </div>
          </Link>
          <Link to="/details?category=advanced">
            <div className="level-box" onClick={handleAdvancedCategory}>
              <p>
                <h2>ADVANCED</h2>
                <span>(AGE 13 - 18)</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
