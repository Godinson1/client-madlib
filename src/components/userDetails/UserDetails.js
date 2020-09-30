import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./details.css";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { isEmail } from "../../helpers/validator";
import { FILL_RULES, EMAIL_IN_USE, INVALID_EMAIL } from "./constant";

const UserDetails = ({ location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [rules, setRules] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [error, setError] = useState(null);

  const details = useSelector((state) => state.admin.details);

  const { category } = queryString.parse(location.search);
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleZipcode = (e) => setZipcode(e.target.value);
  const handleRules = () => setRules(!rules);
  const handleUpdates = () => setUpdates(!updates);

  let existingEmail;

  if (details && details.data) {
    existingEmail = details.data.find((data) => data.email === email);
  }

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmail(email)) {
      setError(INVALID_EMAIL);
    } else if (existingEmail) {
      setError(EMAIL_IN_USE);
    } else if (rules !== true) {
      setError(FILL_RULES);
    } else {
      history.push(
        `/${category}?n=${name}&e=${email}&z=${zipcode}&u=${updates}&r=${rules}`
      );
    }
  };

  return (
    <div>
      <div className="banner-landing">
        <div className="header">
          <h1>MOM'S BEST BACK TO LOL TRIVIA CONTEST</h1>
          <h5>
            Please complete the following before continuing - (Required Fields{" "}
            <span id="required">**</span>)
          </h5>
        </div>
        <div className="container">
          <div className="form-containers">
            {error ? (
              <div className="error">
                <span>{error}</span>
              </div>
            ) : (
              ""
            )}
            <form onSubmit={handleSubmit}>
              <div className="forms">
                <label>
                  <span id="required">**</span> Name:
                </label>
                <input
                  type="text"
                  onChange={handleName}
                  value={name}
                  className="form"
                  required
                />
              </div>
              <div className="forms">
                <label>
                  <span id="required">**</span> Email:
                </label>
                <input
                  type="email"
                  className="form"
                  onChange={handleEmail}
                  value={email}
                  required
                />
              </div>
              <div className="forms">
                <label>
                  <span id="required">**</span> Zipcode:
                </label>
                <input
                  type="text"
                  className="form"
                  onChange={handleZipcode}
                  value={zipcode}
                  required
                />
              </div>
              <div className="forms">
                <div>
                  <span id="required">**</span>
                  <input
                    type="checkbox"
                    onChange={handleRules}
                    value={rules}
                    defaultChecked={rules}
                    className="formik"
                  />
                  <small>
                    I have read and agreed to the Rules and Regulations
                  </small>
                </div>
              </div>
              <div className="forms">
                <div>
                  <input
                    type="checkbox"
                    onChange={handleUpdates}
                    value={updates}
                    defaultChecked={updates}
                    className="formik"
                  ></input>
                  <small>
                    I would like to receive future Mom’s Best news, coupons and
                    updates.
                  </small>
                </div>
              </div>
              <button className="cont" type="submit" disabled={false}>
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
