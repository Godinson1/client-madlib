import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./madlib.css";
import queryString from "query-string";
import { advancedMadlib } from "../../actions/madlib";
import { useHistory } from "react-router-dom";

export default function Advanced({ location }) {
  const [numberOne, seNumberOne] = useState("");
  const [numberTwo, seNumberTwo] = useState("");
  const [name, setName] = useState("");
  const [noun, setNoun] = useState("");
  const [foodOne, setFoodOne] = useState("");
  const [foodTwo, setFoodTwo] = useState("");
  const [place, setPlace] = useState("");
  const [animal, setAnimal] = useState("");
  const [object, setObject] = useState("");
  const [schoolSubjectOne, setSchoolSubjectOne] = useState("");
  const [schoolSubjectTwo, setSchoolSubjectTwo] = useState("");
  const [yearFromPast, setYearFromPast] = useState("");
  const [adjectiveOne, setAdjectiveOne] = useState("");
  const [adjectiveTwo, setAdjectiveTwo] = useState("");
  const [adjectiveThree, setAdjectiveThree] = useState("");

  const data = useSelector((state) => state.user);

  const { loading } = data;

  const dispatch = useDispatch();
  const history = useHistory();

  const { n, e, z, u, r } = queryString.parse(location.search);
  const handleNumberOne = (e) => seNumberOne(e.target.value);
  const handleNumberTwo = (e) => seNumberTwo(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleNoun = (e) => setNoun(e.target.value);
  const handleFoodOne = (e) => setFoodOne(e.target.value);
  const handleFoodTwo = (e) => setFoodTwo(e.target.value);
  const handlePlace = (e) => setPlace(e.target.value);
  const handleObject = (e) => setObject(e.target.value);
  const handleSchoolSubjectOne = (e) => setSchoolSubjectOne(e.target.value);
  const handleSchoolSubjectTwo = (e) => setSchoolSubjectTwo(e.target.value);
  const handleAdjectiveOne = (e) => setAdjectiveOne(e.target.value);
  const handleAdjectiveTwo = (e) => setAdjectiveTwo(e.target.value);
  const handleAdjectiveThree = (e) => setAdjectiveThree(e.target.value);
  const handleYearFromPast = (e) => setYearFromPast(e.target.value);
  const handleAnimal = (e) => setAnimal(e.target.value);

  const advancedData = {
    username: n,
    email: e,
    zipcode: z,
    updates: u,
    rules: r,
    numberOne,
    numberTwo,
    schoolSubjectOne,
    schoolSubjectTwo,
    adjectiveOne,
    adjectiveTwo,
    adjectiveThree,
    foodOne,
    foodTwo,
    place,
    yearFromPast,
    object,
    animal,
    name,
    noun,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(advancedMadlib(advancedData, history));
  };

  return (
    <div>
      <div className="banner-landing">
        <h1>ADVANCED (AGE 13 -18)</h1>
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="forms">
                <h5>ADJECTIVE:</h5>
                <input
                  type="text"
                  onChange={handleAdjectiveOne}
                  value={adjectiveOne}
                  className="form"
                  required
                />
              </div>
              <div className="forms">
                <h5>NUMBER:</h5>
                <input
                  type="number"
                  className="form"
                  onChange={handleNumberOne}
                  value={numberOne}
                  required
                />
              </div>
              <div className="forms">
                <h5>YEAR FROM THE PAST:</h5>
                <input
                  type="number"
                  className="form"
                  onChange={handleYearFromPast}
                  value={yearFromPast}
                  required
                />
              </div>
              <div className="forms">
                <h5>PLACE:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handlePlace}
                  value={place}
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
              <div className="forms">
                <h5>OBJECT:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleObject}
                  value={object}
                  required
                />
              </div>
              <div className="forms">
                <h5>NUMBER:</h5>
                <input
                  type="number"
                  className="form"
                  onChange={handleNumberTwo}
                  value={numberTwo}
                  required
                />
              </div>
              <div className="forms">
                <h5>SCHOOL SUBJECT:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleSchoolSubjectOne}
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
                <h5>ADJECTIVE:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleAdjectiveTwo}
                  value={adjectiveTwo}
                  required
                />
              </div>
              <div className="forms">
                <h5>FOOD:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleFoodOne}
                  value={foodOne}
                  required
                />
              </div>
              <div className="forms">
                <h5>FOOD:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleFoodTwo}
                  value={foodTwo}
                  required
                />
              </div>
              <div className="forms">
                <h5>ADJECTIVE:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleAdjectiveThree}
                  value={adjectiveThree}
                  required
                />
              </div>
              <div className="forms">
                <h5>NOUN:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleNoun}
                  value={noun}
                  required
                />
              </div>
              <div className="forms">
                <h5>SCHOOL SUBJECT:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleSchoolSubjectTwo}
                  value={schoolSubjectTwo}
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
