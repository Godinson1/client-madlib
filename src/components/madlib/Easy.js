import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./madlib.css";
import queryString from "query-string";
import { easyMadlib } from "../../actions/madlib";
import { useHistory } from "react-router-dom";

export default function Easy({ location }) {
  const [name, setName] = useState("");
  const [colorOne, setColorOne] = useState("");
  const [colorTwo, setColorTwo] = useState("");
  const [schoolSubjectOne, setSchoolSubjectOne] = useState("");
  const [favouriteSchoolSport, setFavouriteSchoolSport] = useState("");
  const [animal, setAnimal] = useState("");

  const data = useSelector((state) => state.user);

  const { loading } = data;

  const dispatch = useDispatch();
  const history = useHistory();

  const { n, e, z, u, r } = queryString.parse(location.search);
  const handleName = (e) => setName(e.target.value);
  const handleColorOne = (e) => setColorOne(e.target.value);
  const handleColorTwo = (e) => setColorTwo(e.target.value);
  const handleSchoolSubject = (e) => setSchoolSubjectOne(e.target.value);
  const handleSetFavouriteSport = (e) =>
    setFavouriteSchoolSport(e.target.value);
  const handleAnimal = (e) => setAnimal(e.target.value);

  const easyData = {
    username: n,
    email: e,
    zipcode: z,
    updates: u,
    rules: r,
    name,
    colorOne,
    colorTwo,
    schoolSubjectOne,
    favouriteSchoolSport,
    animal,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(easyMadlib(easyData, history));
  };

  return (
    <div>
      <div className="banner-landing">
        <div className="header-madlib"></div>
        <h1>EASY (AGE 3 - 7)</h1>
        <div className="container">
          <div className="form-container-madlib">
            <form onSubmit={handleSubmit}>
              <div className="forms-madlib">
                <h5>COLOR:</h5>
                <input
                  type="text"
                  onChange={handleColorOne}
                  value={colorOne}
                  className="form-madlib"
                  required
                />
              </div>
              <div className="forms-madlib">
                <h5>COLOR:</h5>
                <input
                  type="text"
                  className="form-madlib"
                  onChange={handleColorTwo}
                  value={colorTwo}
                  required
                />
              </div>
              <div className="forms-madlib">
                <h5>SCHOOL SUBJECT:</h5>
                <input
                  type="text"
                  className="form-madlib"
                  onChange={handleSchoolSubject}
                  value={schoolSubjectOne}
                  required
                />
              </div>
              <div className="forms-madlib">
                <h5>NAME:</h5>
                <input
                  type="text"
                  className="form-madlib"
                  onChange={handleName}
                  value={name}
                  required
                />
              </div>
              <div className="forms-madlib">
                <h5>FAVOURITE SCHOOL SPORT:</h5>
                <input
                  type="text"
                  className="form-madlib"
                  onChange={handleSetFavouriteSport}
                  value={favouriteSchoolSport}
                  required
                />
              </div>
              <div className="forms-madlib">
                <h5>ANIMAL:</h5>
                <input
                  type="text"
                  className="form-madlib"
                  onChange={handleAnimal}
                  value={animal}
                  required
                />
              </div>
              <button className="sub" type="submit" disabled={loading}>
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
