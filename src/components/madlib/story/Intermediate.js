import React from "react";
import { useSelector } from "react-redux";
import Facebook from "react-sharingbuttons/dist/buttons/Facebook";
import Twitter from "react-sharingbuttons/dist/buttons/Twitter";
import { convertImage } from "./helper";
import queryString from "query-string";

const IntermediateMadlib = ({ location }) => {
  const { e } = queryString.parse(location.search);
  const url = `https://madlib-test.netlify.app/madlib/view/intermediate?e=${e}`;
  const shareText = "Hey there! Just made a madlib, Check it out!";

  const data = useSelector((state) => state.user.madlib);

  const myRef = React.createRef();

  const handleDownload = () => {
    convertImage(myRef.current);
  };

  return (
    <div>
      <div className="banner-landing">
        <div className="container">
          {data ? (
            <div className="form-container" ref={myRef}>
              <h1>INTERMEDIATE MADLIB</h1>
              <p className="story">
                {" "}
                Summer is officially over, and even though classes look a bit
                different this year, I’m excited to finally be in{" "}
                <span className="lib">{data.numberOne}</span>th grade. I have to
                tell you about my first day back – it was so funny! We got to
                pick a fun outfit to wear, so I put on my{" "}
                <span className="lib">{data.halloweenCostume}</span>
                costume – it was awesome! When it was time to introduce
                ourselves, I told my classmates about when I went camping this
                summer and ate
                <span className="lib">{data.largeNumber}</span> pieces of{" "}
                <span className="lib">{data.snackFood}</span>. I also said that
                I want to be a<span className="lib">{data.occupation}</span>{" "}
                when I grow up. Right as I finished speaking, I looked out the
                window and saw a <span className="lib">{data.size}</span> wild{" "}
                <span className="lib">{data.animal}</span> run by! It startled
                me, so I screamed{" "}
                <span className="lib">“{data.exclamation}!”</span> It was a{" "}
                <span className="lib">{data.adjectiveOne}</span> start to this
                year, and I’m ready to tackle school!
              </p>
            </div>
          ) : (
            <div>
              <h1>LOADING...</h1>
            </div>
          )}
        </div>
        <button className="cont" type="submit" onClick={handleDownload}>
          Download
        </button>
        <Facebook url={url} />
        <Twitter url={url} shareText={shareText} />
      </div>
    </div>
  );
};

export default IntermediateMadlib;
