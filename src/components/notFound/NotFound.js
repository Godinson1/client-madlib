import React from "react";
import { useHistory } from "react-router-dom";
import "./notfound.css";

const NotFound = () => {
  const history = useHistory();

  return (
    <div>
      <div className="not-found">
        <h1 className="h1-nf">ERROR 404 - PAGE NOT FOUND</h1>
        <p id="ps" onClick={() => history.goBack()}>
          Go Back
        </p>
      </div>
    </div>
  );
};

export default NotFound;
