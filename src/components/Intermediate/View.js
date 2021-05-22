import React, { useEffect } from "react";
import { Button, ScaleFade } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { retrieveMadlib } from "../../actions/madlib";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "../Utility/util.css";

const IntermediateView = ({ location }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.madlib);
  const { e } = queryString.parse(location.search);

  useEffect(() => {
    dispatch(retrieveMadlib(e));
  }, [dispatch, e]);

  const madlib = data;
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
                      <div className="tag"> INTERMEDIATE MADLIB</div>
                      <p>
                        {" "}
                        Summer is officially over, and even though classes look
                        a bit different this year, I’m excited to finally be in{" "}
                        <span className="lib">{madlib[0].numberOne}</span>th
                        grade. I have to tell you about my first day back – it
                        was so funny! We got to pick a fun outfit to wear, so I
                        put on my{" "}
                        <span className="lib">
                          {madlib[0].halloweenCostume}{" "}
                        </span>{" "}
                        costume – it was awesome! When it was time to introduce
                        ourselves, I told my classmates about when I went
                        camping this summer and ate{" "}
                        <span className="lib">{madlib[0].largeNumber}</span>{" "}
                        pieces of{" "}
                        <span className="lib">{madlib[0].snackFood}</span>. I
                        also said that I want to be a{" "}
                        <span className="lib">{madlib[0].occupation}</span> when
                        I grow up. Right as I finished speaking, I looked out
                        the window and saw a{" "}
                        <span className="lib">{madlib[0].size}</span> wild{" "}
                        <span className="lib">{madlib.animal}</span> run by! It
                        startled me, so I screamed{" "}
                        <span className="lib">“{madlib[0].exclamation}!”</span>{" "}
                        It was a{" "}
                        <span className="lib">{madlib[0].adjectiveOne}</span>{" "}
                        start to this year, and I’m ready to tackle school!
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

export default IntermediateView;
