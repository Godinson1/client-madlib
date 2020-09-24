import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
        <h1>EASY (AGE 3 - 7)</h1>
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="forms">
                <h5>COLOR:</h5>
                <input
                  type="text"
                  onChange={handleColorOne}
                  value={colorOne}
                  className="form"
                  required
                />
              </div>
              <div className="forms">
                <h5>COLOR:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleColorTwo}
                  value={colorTwo}
                  required
                />
              </div>
              <div className="forms">
                <h5>SCHOOL SUBJECT:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleSchoolSubject}
                  value={schoolSubjectOne}
                  required
                />
              </div>
              <div className="forms">
                <h5>NAME:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleName}
                  value={name}
                  required
                />
              </div>
              <div className="forms">
                <h5>FAVOURITE SCHOOL SPORT:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleSetFavouriteSport}
                  value={favouriteSchoolSport}
                  required
                />
              </div>
              <div className="forms">
                <h5>ANIMAL:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleAnimal}
                  value={animal}
                  required
                />
              </div>
              <button className="cont" type="submit">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
