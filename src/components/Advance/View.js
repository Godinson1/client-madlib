import React, { useEffect } from "react";
import { Button, ScaleFade } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { retrieveMadlib } from "../../actions/madlib";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "../Utility/util.css";

const AdvanceView = ({ location }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.madlib);
  const { e } = queryString.parse(location.search);

  useEffect(() => {
    dispatch(retrieveMadlib(e));
  }, [dispatch, e]);

  dayjs.extend(relativeTime);

  return (
    <div>
      <div className="header">
        <div className="round-design">
          <ScaleFade initialScale={0.9} in={true}>
            <div className="detail-story-container">
              {data && data[0] ? (
                <div>
                  <div className="view-header">
                    <div>
                      <h6>Created By: {data[0].username}</h6>
                      <div> {dayjs(data[0].createdAt).fromNow()}</div>
                    </div>
                    <div>
                      <Link to="/">
                        <Button
                          height="48px"
                          width="200px"
                          colorScheme="purple"
                          size="lg"
                        >
                          Create
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="container">
                    <div className="form-container-madlib">
                      <div className="tag"> ADVANCED MADLIB</div>
                      <p className="story">
                        Where to begin? This year has been{" "}
                        <span className="lib">{data[0].adjectiveOne}</span>, to
                        say the least. I’m back in school and have started{" "}
                        <span className="lib">{data[0].numberOne}</span>th
                        grade. This semester is definitely different than{" "}
                        <span className="lib">{data[0].yearFromPast}</span>, but
                        it makes for some interesting memories! Some students
                        are learning in school, while others are doing virtual
                        learning from the{" "}
                        <span className="lib">{data[0].place}</span>. When one
                        of my classmates logged in for online learning, we saw a{" "}
                        <span className="lib">{data[0].animal}</span> in the
                        background! It stood there and chewed on a piece of{" "}
                        <span className="lib">{data[0].object}</span> for{" "}
                        <span className="lib">{data[0].numberTwo}</span> minutes
                        before my classmate realized.It was so funny! I’m really
                        enjoying my{" "}
                        <span className="lib">{data[0].schoolSubjectOne}</span>{" "}
                        class because my teacher Mr.{" "}
                        <span className="lib">{data[0].name}</span> is the most{" "}
                        <span className="lib">{data[0].adjectiveTwo}</span>{" "}
                        teacher I’ve ever had! Lunch has always been my second
                        favorite part of the school day. This week I made{" "}
                        <span className="lib">{data[0].foodOne}</span> and{" "}
                        <span className="lib">{data[0].foodTwo}</span> for my
                        lunch. It’s a weird combination, I know, but it’s just
                        so good! It is going to be a{" "}
                        <span className="lib">{data[0].adjectiveThree}</span>{" "}
                        year - I hope I get to learn about{" "}
                        <span className="lib">{data[0].noun}</span> in my{" "}
                        <span className="lib">{data[0].schoolSubjectTwo}</span>{" "}
                        class!
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="load">
                  <h1>LOADING...</h1>
                </div>
              )}
            </div>
          </ScaleFade>
        </div>
      </div>
    </div>
  );
};

export default AdvanceView;
