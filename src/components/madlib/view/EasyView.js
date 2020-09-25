import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { retrieveMadlib } from "../../../actions/madlib";

const EasyView = ({ location }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.madlib);
  const { e } = queryString.parse(location.search);

  useEffect(() => {
    dispatch(retrieveMadlib(e));
  }, [dispatch, e]);

  return (
    <div>
      <div className="banner-landing">
        {data && data[0] ? (
          <div>
            <Link to="/">
              <button className="sub" type="submit">
                Create Madlib
              </button>
            </Link>
            <div className="container">
              <div className="form-container">
                <h1>EASY MADLIB</h1>
                <p className="story">
                  It’s officially fall! As the tree leaves outside change from{" "}
                  <span className="lib">{data[0].colorOne}</span>
                  to <span className="lib">{data[0].colorTwo}</span>, it’s time
                  for a new season of learning. My favorite subject in school is{" "}
                  <span className="lib">{data[0].schoolSubjectOne}</span>. My
                  teacher, Mrs. <span className="lib">{data[0].name}</span>,
                  makes it so much fun! This year, I get to take gym class, and
                  I hope we get to play{" "}
                  <span className="lib">{data[0].favouriteSchoolSport}</span> –
                  even if I have to practice at home. I’m excited to learn about{" "}
                  <span className="lib">{data[0].animal}</span> in my science
                  class – they’re my favorite!
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

export default EasyView;
