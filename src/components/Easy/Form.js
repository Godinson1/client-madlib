import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { Button, ScaleFade, Input } from "@chakra-ui/react";
import { EASY_FORM } from "./constants";
import { easyMadlib } from "../../actions/madlib";
import "../Utility/util.css";

const EasyForm = ({ location }) => {
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

  const handleOnChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "animal") setAnimal(e.target.value);
    if (e.target.name === "colorOne") setColorOne(e.target.value);
    if (e.target.name === "colorTwo") setColorTwo(e.target.value);
    if (e.target.name === "schoolSubjectOne")
      setSchoolSubjectOne(e.target.value);
    if (e.target.name === "favouriteSchoolSport")
      setFavouriteSchoolSport(e.target.value);
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
              <div className="tag"> EASY</div>
              {EASY_FORM.map((data, i) => {
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

export default EasyForm;
