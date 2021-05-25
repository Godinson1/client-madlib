import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  const history = useHistory();
  return (
    <div>
      <div className="navbar">
        <div className="logo" onClick={() => history.push("/")}>
          <div className="logo-main">M</div>ADLIB
        </div>
        <div className="navMenu"></div>
      </div>
    </div>
  );
};

export default Navbar;
