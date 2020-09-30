import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./madlib.css";
import queryString from "query-string";
import { intermediateMadlib } from "../../actions/madlib";
import { useHistory } from "react-router-dom";

export default function Intermediate({ location }) {
  const [numberOne, seNumberOne] = useState("");
  const [halloweenCostume, setHalloweenCostume] = useState("");
  const [largeNumber, setLargeNumber] = useState("");
  const [snackFood, setSnackFood] = useState("");
  const [occupation, setOccupation] = useState("");
  const [animal, setAnimal] = useState("");
  const [size, setSize] = useState("");
  const [exclamation, setExclamation] = useState("");
  const [adjectiveOne, setAdjectiveOne] = useState("");

  const data = useSelector((state) => state.user);

  const { loading } = data;

  const dispatch = useDispatch();
  const history = useHistory();

  const { n, e, z, u, r } = queryString.parse(location.search);
  const handleNumberOne = (e) => seNumberOne(e.target.value);
  const handleHalloweenCostume = (e) => setHalloweenCostume(e.target.value);
  const handleLargeNumber = (e) => setLargeNumber(e.target.value);
  const handleSnackFood = (e) => setSnackFood(e.target.value);
  const handleOccupation = (e) => setOccupation(e.target.value);
  const handleAnimal = (e) => setAnimal(e.target.value);
  const handleExclamation = (e) => setExclamation(e.target.value);
  const handleAdjective = (e) => setAdjectiveOne(e.target.value);
  const handleSize = (e) => setSize(e.target.value);

  const easyData = {
    username: n,
    email: e,
    zipcode: z,
    updates: u,
    rules: r,
    numberOne,
    size,
    snackFood,
    adjectiveOne,
    occupation,
    animal,
    largeNumber,
    halloweenCostume,
    exclamation,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(intermediateMadlib(easyData, history));
  };

  return (
    <div>
      <div className="banner-landing">
        <h1>INTERMEDIATE (AGE 8 -12)</h1>
        <div className="container">
          <div className="form-container-madlib">
            <form onSubmit={handleSubmit}>
              <div className="forms-madlib">
                <h5>NUMBER:</h5>
                <input
                  type="number"
                  onChange={handleNumberOne}
                  value={numberOne}
                  className="form-madlib"
                  required
                />
              </div>
              <div className="forms-madlib">
                <h5>HALLOWEEN COSTUME:</h5>
                <input
                  type="text"
                  className="form-madlib"
                  onChange={handleHalloweenCostume}
                  value={halloweenCostume}
                  required
                />
              </div>
              <div className="forms-madlib">
                <h5>LARGE NUMBER:</h5>
                <input
                  type="number"
                  className="form-madlib"
                  onChange={handleLargeNumber}
                  value={largeNumber}
                  required
                />
              </div>
              <div className="forms-madlib">
                <h5>SNACK FOOD:</h5>
                <input
                  type="text"
                  className="form-madlib"
                  onChange={handleSnackFood}
                  value={snackFood}
                  required
                />
              </div>
              <div className="forms-madlib">
                <h5>OCCUPATION:</h5>
                <input
                  type="text"
                  className="form-madlib"
                  onChange={handleOccupation}
                  value={occupation}
                  required
                />
              </div>
              <div className="forms-madlib">
                <h5>SIZE:</h5>
                <input
                  type="number"
                  className="form-madlib"
                  onChange={handleSize}
                  value={size}
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
              <div className="forms-madlib">
                <h5>EXCLAMATION:</h5>
                <input
                  type="text"
                  className="form-madlib"
                  onChange={handleExclamation}
                  value={exclamation}
                  required
                />
              </div>
              <div className="forms-madlib">
                <h5>ADJECTIVE:</h5>
                <input
                  type="text"
                  className="form-madlib"
                  onChange={handleAdjective}
                  value={adjectiveOne}
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
