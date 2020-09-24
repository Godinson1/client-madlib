import React, { useState } from "react";
import "./details.css";
import queryString from "query-string";
import { Link } from "react-router-dom";

const UserDetails = ({ location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [rules, setRules] = useState(false);
  const [updates, setUpdates] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <div className="banner-landing">
        <h1>MOM'S BEST BACK TO LOL TRIVIA CONTEST</h1>
        <h5>**Please complete the following before continuing**</h5>
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="forms">
                <h5>Name:</h5>
                <input
                  type="text"
                  onChange={handleName}
                  value={name}
                  className="form"
                  required
                />
              </div>
              <div className="forms">
                <h5>Email:</h5>
                <input
                  type="email"
                  className="form"
                  onChange={handleEmail}
                  value={email}
                  required
                />
              </div>
              <div className="forms">
                <h5>Zipcode:</h5>
                <input
                  type="text"
                  className="form"
                  onChange={handleZipcode}
                  value={zipcode}
                  required
                />
              </div>
              <div className="forms">
                <input
                  type="checkbox"
                  onChange={handleRules}
                  value={rules}
                  defaultChecked={rules}
                  className="formik"
                ></input>
                <small>
                  I have read and agreed to the{" "}
                  <a href="#">Rules and Regulations</a>
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
              <Link
                to={`/${category}?n=${name}&e=${email}&z=${zipcode}&u=${updates}&r=${rules}`}
              >
                <button
                  className="cont"
                  type="submit"
                  disabled={rules === false ? true : false}
                >
                  Continue
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
