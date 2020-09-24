import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { retrieveMadlib } from "../../../actions/madlib";

const AdvancedView = ({ location }) => {
  const { e } = queryString.parse(location.search);

  useEffect(() => {
    dispatch(retrieveMadlib(e));
  }, [retrieveMadlib]);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.madlib);

  console.log(data);

  return (
    <div>
      <div className="banner-landing">
        {data ? (
          <div>
            <Link to="/">
              <button className="sub" type="submit">
                Create Madlib
              </button>
            </Link>
            <div className="container">
              <div className="form-container">
                <h1>ADVANCED MADLIB</h1>
                <p>
                  Where to begin? This year has been{" "}
                  <span className="lib">{data.adjectiveOne}</span>, to say the
                  least. I’m back in school and have started{" "}
                  <span className="lib">{data.numberOne}</span>th grade. This
                  semester is definitely different than{" "}
                  <span className="lib">{data.yearFromPast}</span>, but it makes
                  for some interesting memories! Some students are learning in
                  school, while others are doing virtual learning from the{" "}
                  <span className="lib">{data.place}</span>. When one of my
                  classmates logged in for online learning, we saw a{" "}
                  <span className="lib">{data.animal}</span> in the background!
                  It stood there and chewed on a piece of{" "}
                  <span className="lib">{data.object}</span>
                  for
                  <span className="lib">{data.numberTwo}</span> minutes before
                  my classmate realized.It was so funny! I’m really enjoying my{" "}
                  <span className="lib">{data.schoolSubjectOne}</span> class
                  because my teacher Mr. NAMEis the most{" "}
                  <span className="lib">{data.adjectiveTwo}</span> teacher I’ve
                  ever had! Lunch has always been my second favorite part of the
                  school day. This week I made
                  <span className="lib">{data.foodOne}</span> and{" "}
                  <span className="lib">{data.foodTwo}</span> for my lunch. It’s
                  a weird combination, I know,but it’s just so good! It is going
                  to be a <span className="lib">{data.adjectiveThree}</span>{" "}
                  year - I hope I get to learn about{" "}
                  <span className="lib">{data.noun}</span> in my{" "}
                  <span className="lib">{data.schoolSubjectTwo}</span> class!
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
