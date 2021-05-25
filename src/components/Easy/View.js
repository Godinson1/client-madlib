import React, { useEffect } from "react";
import { Button, ScaleFade } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { retrieveMadlib } from "../../actions/madlib";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "../Utility/util.css";

const EasyView = ({ location }) => {
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
                      <div className="tag"> EASY MADLIB</div>
                      <p className="story">
                        It’s officially fall! As the tree leaves outside change
                        from <span className="lib">{data[0].colorOne}</span> to{" "}
                        <span className="lib">{data[0].colorTwo}</span>, it’s
                        time for a new season of learning. My favorite subject
                        in school is{" "}
                        <span className="lib">{data[0].schoolSubjectOne}</span>.
                        My teacher, Mrs.{" "}
                        <span className="lib">{data[0].name}</span>, makes it so
                        much fun! This year, I get to take gym class, and I hope
                        we get to play{" "}
                        <span className="lib">
                          {data[0].favouriteSchoolSport}
                        </span>{" "}
                        – even if I have to practice at home. I’m excited to
                        learn about{" "}
                        <span className="lib">{data[0].animal}</span> in my
                        science class – they’re my favorite!
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-center">
                  <div class="lds-ripple">
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
            </div>
          </ScaleFade>
        </div>
      </div>
    </div>
  );
};

export default EasyView;
