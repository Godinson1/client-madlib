import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { retrieveMadlib } from "../../../actions/madlib";

const AdvancedView = ({ location }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.madlib);
  const { e } = queryString.parse(location.search);

  useEffect(() => {
    dispatch(retrieveMadlib(e));
  }, [dispatch, e]);

  console.log(data && data[0] && data[0].adjectiveOne);

  return (
    <div>
      <div className="banner-landing">
        {data && data[0] ? (
          <div>
            <div className="view-header">
              <div>
                <Link to="/">
                  <button className="sub" type="submit">
                    Create Madlib
                  </button>
                </Link>
              </div>
              <div>
                <small>Created By: </small>
                <small>Created On: </small>
              </div>
            </div>
            <div className="container">
              <div className="form-container">
                <h1>ADVANCED MADLIB</h1>
                <p className="story">
                  Where to begin? This year has been{" "}
                  <span className="lib">{data[0].adjectiveOne}</span>, to say
                  the least. I’m back in school and have started{" "}
                  <span className="lib">{data[0].numberOne}</span>th grade. This
                  semester is definitely different than{" "}
                  <span className="lib">{data[0].yearFromPast}</span>, but it
                  makes for some interesting memories! Some students are
                  learning in school, while others are doing virtual learning
                  from the <span className="lib">{data[0].place}</span>. When
                  one of my classmates logged in for online learning, we saw a{" "}
                  <span className="lib">{data[0].animal}</span> in the
                  background! It stood there and chewed on a piece of{" "}
                  <span className="lib">{data[0].object}</span>
                  for
                  <span className="lib">{data[0].numberTwo}</span> minutes
                  before my classmate realized.It was so funny! I’m really
                  enjoying my{" "}
                  <span className="lib">{data[0].schoolSubjectOne}</span> class
                  because my teacher Mr. NAMEis the most{" "}
                  <span className="lib">{data[0].adjectiveTwo}</span> teacher
                  I’ve ever had! Lunch has always been my second favorite part
                  of the school day. This week I made
                  <span className="lib">{data[0].foodOne}</span> and{" "}
                  <span className="lib">{data[0].foodTwo}</span> for my lunch.
                  It’s a weird combination, I know,but it’s just so good! It is
                  going to be a{" "}
                  <span className="lib">{data[0].adjectiveThree}</span> year - I
                  hope I get to learn about{" "}
                  <span className="lib">{data[0].noun}</span> in my{" "}
                  <span className="lib">{data[0].schoolSubjectTwo}</span> class!
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

export default AdvancedView;
