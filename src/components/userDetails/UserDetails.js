import React, { useState } from "react";
import "./details.css";
import queryString from "query-string";
import { Link, useHistory } from "react-router-dom";
import { isEmail } from "../../helpers/validator";

const UserDetails = ({ location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [rules, setRules] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [error, setError] = useState(null);

  const { category } = queryString.parse(location.search);
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleZipcode = (e) => setZipcode(e.target.value);
  const handleRules = () => setRules(!rules);
  const handleUpdates = () => setUpdates(!updates);

  const data = {
    name,
    email,
    zipcode,
    rules,
    updates,
    category,
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmail(email)) {
      setError("Must be a valid email address");
    } else {
      history.push(
        `/${category}?n=${name}&e=${email}&z=${zipcode}&u=${updates}&r=${rules}`
      );
    }
  };

  return (
    <div>
      <div className="banner-landing">
        <h1>MOM'S BEST BACK TO LOL TRIVIA CONTEST</h1>
        <h5>
          Please complete the following before continuing - (Required Fields{" "}
          <span id="required">**</span>)
        </h5>
        <div className="container">
          <div className="form-container">
            {error ? (
              <div className="error">
                <span>{error}</span>
              </div>
            ) : (
              ""
            )}
            <form>
              <div className="forms">
                <h5>
                  <span id="required">**</span> Name:
                </h5>
                <input
                  type="text"
                  onChange={handleName}
                  value={name}
                  className="form"
                  required
                />
              </div>
              <div className="forms">
                <h5>
                  <span id="required">**</span> Email:
                </h5>
                <input
                  type="email"
                  className="form"
                  onChange={handleEmail}
                  value={email}
                  required
                />
              </div>
              <div className="forms">
                <h5>
                  <span id="required">**</span> Zipcode:
                </h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleZipcode}
                  value={zipcode}
                  required
                />
              </div>
              <div className="forms">
                <span id="required">**</span>
                <input
                  type="checkbox"
                  onChange={handleRules}
                  value={rules}
                  defaultChecked={rules}
                  className="formik"
                ></input>
                <small>
                  I have read and agreed to the{" "}
                  <Link to="#">Rules and Regulations</Link>
                </small>
              </div>
              <div className="forms">
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
              <button
                className="cont"
                type="submit"
                disabled={rules === false ? true : false}
                onClick={handleSubmit}
              >
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
