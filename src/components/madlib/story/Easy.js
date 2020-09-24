import React from "react";
import { useSelector } from "react-redux";
import Facebook from "react-sharingbuttons/dist/buttons/Facebook";
import Twitter from "react-sharingbuttons/dist/buttons/Twitter";
import { convertImage } from "./helper";
import queryString from "query-string";

const EasyMadlib = ({ location }) => {
  const { e } = queryString.parse(location.search);
  const url = `http://localhost:3000/madlib/view/easy?e=${e}`;
  const shareText = "Hey there! Just made a madlib, Check it out!";

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
      <div className="banner-landing">
        <div className="container">
          {data ? (
            <div className="form-container" ref={myRef}>
              <h1>EASY MADLIB</h1>
              <p className="story">
                It’s officially fall! As the tree leaves outside change from{" "}
                <span className="lib">{data.colorOne}</span>
                to <span className="lib">{data.colorTwo}</span>, it’s time for a
                new season of learning. My favorite subject in school is{" "}
                <span className="lib">{data.schoolSubjectOne}</span>. My
                teacher, Mrs. <span className="lib">{data.name}</span>, makes it
                so much fun! This year, I get to take gym class, and I hope we
                get to play{" "}
                <span className="lib">{data.favouriteSchoolSport}</span> – even
                if I have to practice at home. I’m excited to learn about{" "}
                <span className="lib">{data.animal}</span> in my science class –
                they’re my favorite!
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

export default EasyMadlib;
