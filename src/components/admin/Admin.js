import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAdmin } from "../../actions/admin";
import { compareValues, convertToCsv } from "./helper";
import "./admin.css";

const Admin = () => {
  const [toggle, setToggle] = useState(true);
  const [currentSort, setCurrentSort] = useState("");
  const [userDetails, setUserDetails] = useState([]);

  const dispatch = useDispatch();
  const details = useSelector((state) => state.admin.details);

  useEffect(() => {
    if (details && details.data) {
      setUserDetails(details.data);
    }
  }, [details]);

  const handleLogout = () => {
    dispatch(logoutAdmin());
  };

  const sortData = (data) => {
    setToggle((prevState) => !prevState);
    setCurrentSort(data);
    setUserDetails([...userDetails].sort(compareValues("clickCount", toggle)));
  };

  const handleCsv = () => {
    convertToCsv(details.data);
  };

  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="form-container-madlib">
            <h1>ADMIN PANEL</h1>
            <div></div>
            <table id="users-details">
              <thead className="table-heading">
                <tr>
                  <td>ID</td>
                  <td onClick={() => sortData("name")}>
                    NAME {""}
                    {currentSort === "username" ? (
                      toggle ? (
                        <span>&#8593;</span>
                      ) : (
                        <span>&#8595;</span>
                      )
                    ) : (
                      ""
                    )}
                  </td>
                  <td onClick={() => sortData("email")}>
                    EMAIL {""}
                    {currentSort === "email" ? (
                      toggle ? (
                        <span>&#8593;</span>
                      ) : (
                        <span>&#8595;</span>
                      )
                    ) : (
                      ""
                    )}
                  </td>
                  <td onClick={() => sortData("zipcode")}>
                    ZIPCODE {""}
                    {currentSort === "zipcode" ? (
                      toggle ? (
                        <span>&#8593;</span>
                      ) : (
                        <span>&#8595;</span>
                      )
                    ) : (
                      ""
                    )}
                  </td>
                  <td onClick={() => sortData("rules")}>
                    RULES {""}
                    {currentSort === "rules" ? (
                      toggle ? (
                        <span>&#8593;</span>
                      ) : (
                        <span>&#8595;</span>
                      )
                    ) : (
                      ""
                    )}
                  </td>
                  <td onClick={() => sortData("updates")}>
                    UPDATES {""}
                    {currentSort === "updates" ? (
                      toggle ? (
                        <span>&#8593;</span>
                      ) : (
                        <span>&#8595;</span>
                      )
                    ) : (
                      ""
                    )}
                  </td>
                  <td onClick={() => sortData("clickCount")}>
                    COUNTS {""}
                    {currentSort === "clickCount" ? (
                      toggle ? (
                        <span>&#8593;</span>
                      ) : (
                        <span>&#8595;</span>
                      )
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              </thead>
              <tbody className="table-body">
                {userDetails &&
                  userDetails.map((data, i) => {
                    const {
                      username,
                      email,
                      zipcode,
                      rules,
                      updates,
                      clickCount,
                    } = data;
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{zipcode}</td>
                        <td>{rules === true ? "True" : "False"}</td>
                        <td>{updates === true ? "True" : "False"}</td>
                        <td>{clickCount}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="btns">
          <button className="btn-exp" type="submit" onClick={handleCsv}>
            Export
          </button>
          <button className="btn-exp" type="submit" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
