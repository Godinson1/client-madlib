import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../actions/admin";
import { useHistory } from "react-router-dom";
import "./admin.css";

export default function Login() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminDetails = {
      email,
      password,
    };
    dispatch(loginAdmin(adminDetails, history));
  };

  const { loading, error } = admin;
  return (
    <div>
      <div className="container">
        <div className="form-container">
          <h1 className="h1-login">Admin Login</h1>
          {error ? <div className="error">{error.data.message}</div> : ""}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email Address:</label>
              <input
                type="text"
                value={email}
                className="inputs"
                onChange={handleEmail}
              />
            </div>
            <div>
              <label>Password:</label>
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
