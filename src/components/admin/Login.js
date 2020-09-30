import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../actions/admin";
import { useHistory } from "react-router-dom";
import "./admin.css";
import { isEmail } from "../../helpers/validator";

export default function Login() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validEmail = isEmail(email);
    if (!validEmail) {
      setErrors("Must be a valid email address");
    }
    const adminDetails = {
      email,
      password,
    };
    dispatch(loginAdmin(adminDetails, history));
  };

  const { loading, error } = admin;
  return (
    <div className="login">
      <div className="containers">
        <div className="login-container">
          <h2 className="h1-login">Admin Login</h2>
          {errors ? (
            <div className="error">{errors}</div>
          ) : error ? (
            <div className="error">{error.data.message}</div>
          ) : (
            ""
          )}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email Address:</label>
              <br />
              <input
                type="text"
                value={email}
                className="inputs"
                onChange={handleEmail}
              />
            </div>
            <div>
              <label>Password:</label>
              <br />
              <input
                type="password"
                value={password}
                className="inputs"
                onChange={handlePassword}
              />
            </div>
            <button className="btn-exp" type="submit" disabled={loading}>
              {loading && loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
