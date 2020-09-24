import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { retrieveMadlib } from "../../../actions/madlib";

const IntermediateView = ({ location }) => {
  const { e } = queryString.parse(location.search);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.madlib);

  const searchParam = {
    email: e,
  };

  useEffect(() => {
    console.log(searchParam);
    dispatch(retrieveMadlib(searchParam));
  }, [retrieveMadlib]);

  const { loading, madlib } = data;

  return (
    <div>
      <div className="banner-landing">
        {madlib ? (
          <div>
            <Link to="/">
              <button className="sub" type="submit">
                Create Madlib
              </button>
            </Link>
            <div className="container">
              <div className="form-container">
                <h1>Intermediate MADLIB</h1>
                <p>
                  {" "}
                  Summer is officially over, and even though classes look a bit
                  different this year, I’m excited to finally be in{" "}
                  <span className="lib">{madlib.numberOne}</span>th grade. I
                  have to tell you about my first day back – it was so funny! We
                  got to pick a fun outfit to wear, so I put on my{" "}
                  <span className="lib">{madlib.halloweenCostume}</span>
                  costume – it was awesome! When it was time to introduce
                  ourselves, I told my classmates about when I went camping this
                  summer and ate
                  <span className="lib">{madlib.largeNumber}</span> pieces of{" "}
                  <span className="lib">{madlib.snackFood}</span>. I also said
                  that I want to be a
                  <span className="lib">{madlib.occupation}</span> when I grow
                  up. Right as I finished speaking, I looked out the window and
                  saw a <span className="lib">{madlib.size}</span> wild{" "}
                  <span className="lib">{madlib.animal}</span> run by! It
                  startled me, so I screamed{" "}
                  <span className="lib">“{madlib.exclamation}!”</span> It was a{" "}
                  <span className="lib">{madlib.adjectiveOne}</span> start to
                  this year, and I’m ready to tackle school!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>LOADING...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntermediateView;
