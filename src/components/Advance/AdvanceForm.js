import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { Button, ScaleFade, Input } from "@chakra-ui/react";
import { ADVANCE_FORM } from "./constants";
import { advancedMadlib } from "../../actions/madlib";

const AdvanceForm = ({ location }) => {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
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

  const handleOnChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "noun") setNoun(e.target.value);
    if (e.target.name === "animal") setAnimal(e.target.value);
    if (e.target.name === "adjectiveOne") setAdjectiveOne(e.target.value);
    if (e.target.name === "adjectiveTwo") setAdjectiveTwo(e.target.value);
    if (e.target.name === "adjectiveThree") setAdjectiveThree(e.target.value);
    if (e.target.name === "schoolSubjectOne")
      setSchoolSubjectOne(e.target.value);
    if (e.target.name === "schoolSubjectTwo")
      setSchoolSubjectTwo(e.target.value);
    if (e.target.name === "object") setObject(e.target.value);
    if (e.target.name === "yearFromPast") setYearFromPast(e.target.value);
    if (e.target.name === "foodOne") setFoodOne(e.target.value);
    if (e.target.name === "foodTwo") setFoodTwo(e.target.value);
    if (e.target.name === "place") setPlace(e.target.value);
    if (e.target.name === "numberOne") setNumberOne(e.target.value);
    if (e.target.name === "numberTwo") setNumberTwo(e.target.value);
  };

  return (
    <div>
      <div className="header">
        <div className="round-design">
          <ScaleFade initialScale={0.9} in={true}>
            <div className="detail-forms-container">
              <span onClick={() => history.goBack()} className="back">
                &#8592;
              </span>
              <div className="tag">ADVANCED</div>
              {ADVANCE_FORM.map((data, i) => {
                const { name, label, placeholder } = data;
                return (
                  <div className="form-container">
                    <label>{label}</label>
                    <Input
                      onChange={(e) => handleOnChange(e)}
                      name={name}
                      placeholder={placeholder}
                      size="md"
                    />
                  </div>
                );
              })}
            </div>
            <div className="btnCenter">
              <Button
                onClick={handleSubmit}
                height="48px"
                width="200px"
                colorScheme="purple"
                size="lg"
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </Button>
            </div>
          </ScaleFade>
        </div>
      </div>
    </div>
  );
};

export default AdvanceForm;
