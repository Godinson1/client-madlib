import React from "react";
import { Button, ScaleFade } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Facebook from "react-sharingbuttons/dist/buttons/Facebook";
import Twitter from "react-sharingbuttons/dist/buttons/Twitter";
import queryString from "query-string";
import { convertImage, SHARE_TEXT, SHARE_URL } from "../Utility";
import "../Utility/util.css";

const IntermediateStory = ({ location }) => {
  const { e } = queryString.parse(location.search);
  const url = `${SHARE_URL}/advanced?e=${e}`;

  const data = useSelector((state) => state.user.madlib);

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
                  <div className="tag"> INTERMEDIATE MADLIB</div>
                  <p className="story">
                    {" "}
                    Summer is officially over, and even though classes look a
                    bit different this year, I’m excited to finally be in{" "}
                    <span className="lib">{data.numberOne}</span>th grade. I
                    have to tell you about my first day back – it was so funny!
                    We got to pick a fun outfit to wear, so I put on my{" "}
                    <span className="lib">{data.halloweenCostume}</span> costume
                    – it was awesome! When it was time to introduce ourselves, I
                    told my classmates about when I went camping this summer and
                    ate
                    <span className="lib">{data.largeNumber}</span> pieces of{" "}
                    <span className="lib">{data.snackFood}</span>. I also said
                    that I want to be a
                    <span className="lib">{data.occupation}</span> when I grow
                    up. Right as I finished speaking, I looked out the window
                    and saw a <span className="lib">{data.size}</span> wild{" "}
                    <span className="lib">{data.animal}</span> run by! It
                    startled me, so I screamed{" "}
                    <span className="lib">“{data.exclamation}!”</span> It was a{" "}
                    <span className="lib">{data.adjectiveOne}</span> start to
                    this year, and I’m ready to tackle school!
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

export default IntermediateStory;
