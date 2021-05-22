import React from "react";
import { Button, ScaleFade } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Facebook from "react-sharingbuttons/dist/buttons/Facebook";
import Twitter from "react-sharingbuttons/dist/buttons/Twitter";
import { convertImage } from "./helper";
import queryString from "query-string";
import { SHARE_URL, SHARE_TEXT } from "./constants";
import "../Utility/util.css";

const EasyStory = ({ location }) => {
  const { e } = queryString.parse(location.search);
  const url = `${SHARE_URL}/easy?e=${e}`;
  const data = useSelector((state) => state.user.madlib);

  if (data) {
    console.log(data);
  }

  const myRef = React.createRef();

  const handleDownload = () => {
    convertImage(myRef.current);
  };
  return (
    <div>
      <div className="header">
        <div className="round-design">
          <ScaleFade initialScale={0.9} in={true}>
            <div className="detail-story-container">
              {data ? (
                <div className="form-container-madlib" ref={myRef}>
                  <div className="tag"> EASY MADLIB</div>
                  <p className="story">
                    It’s officially fall! As the tree leaves outside change from{" "}
                    <span className="lib">{data.colorOne}</span> to{" "}
                    <span className="lib">{data.colorTwo}</span>, it’s time for
                    a new season of learning. My favorite subject in school is{" "}
                    <span className="lib">{data.schoolSubjectOne}</span>. My
                    teacher, Mrs. <span className="lib">{data.name}</span>,
                    makes it so much fun! This year, I get to take gym class,
                    and I hope we get to play{" "}
                    <span className="lib">{data.favouriteSchoolSport}</span> –
                    even if I have to practice at home. I’m excited to learn
                    about <span className="lib">{data.animal}</span> in my
                    science class – they’re my favorite!
                  </p>
                </div>
              ) : (
                <div>
                  <h1>LOADING...</h1>
                </div>
              )}
              <div className="flex">
                <div>
                  <Facebook url={url} />
                </div>
                <div>
                  <Button
                    onClick={handleDownload}
                    height="38px"
                    colorScheme="purple"
                    size="lg"
                  >
                    Download
                  </Button>
                </div>
                <div>
                  <Twitter url={url} shareText={SHARE_TEXT} />
                </div>
              </div>
            </div>
          </ScaleFade>
        </div>
      </div>
    </div>
  );
};

export default EasyStory;
