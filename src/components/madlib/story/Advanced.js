import React from "react";
import { useSelector } from "react-redux";
import Facebook from "react-sharingbuttons/dist/buttons/Facebook";
import Twitter from "react-sharingbuttons/dist/buttons/Twitter";
import { convertImage } from "./helper";
import queryString from "query-string";

const AdvancedMadlib = ({ location }) => {
  const { e } = queryString.parse(location.search);
  const url = `https://madlib-test.netlify.app/madlib/view/advanced?e=${e}`;
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
              <h1>ADVANCED MADLIB</h1>
              <p className="story">
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
                <span className="lib">{data.animal}</span> in the background! It
                stood there and chewed on a piece of{" "}
                <span className="lib">{data.object}</span>
                for <span className="lib">{data.numberTwo}</span> minutes before
                my classmate realized.It was so funny! I’m really enjoying my{" "}
                <span className="lib">{data.schoolSubjectOne}</span> class
                because my teacher Mr. <span className="lib">{data.name}</span>{" "}
                is the most <span className="lib">{data.adjectiveTwo}</span>{" "}
                teacher I’ve ever had! Lunch has always been my second favorite
                part of the school day. This week I made{" "}
                <span className="lib">{data.foodOne}</span> and{" "}
                <span className="lib">{data.foodTwo}</span> for my lunch. It’s a
                weird combination, I know,but it’s just so good! It is going to
                be a <span className="lib">{data.adjectiveThree}</span> year - I
                hope I get to learn about{" "}
                <span className="lib">{data.noun}</span> in my{" "}
                <span className="lib">{data.schoolSubjectTwo}</span> class!
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

export default AdvancedMadlib;
