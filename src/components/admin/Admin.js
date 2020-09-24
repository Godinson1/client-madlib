import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersData, logoutAdmin } from "../../actions/admin";
import "./admin.css";

const Admin = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.admin.details);

  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutAdmin());
  };

  console.log(details && details.data);

  const handleCsv = () => {
    const csvRow = [];
    const A = [
      ["S/N", "NAME", "EMAIL", "ZIPCODE", "UPDATES", "RULES", "CLICK-COUNT"],
    ];
    const re = details.data;

    //convert each object in DATA into an array and add it to our new array
    for (let item = 0; item < re.length; item++) {
      A.push([
        item + 1,
        re[item].username,
        re[item].email,
        re[item].zipcode,
        re[item].rules,
        re[item].updates,
        re[item].clickCount,
      ]);
    }

    //convert "array of arrays" into "array of strings"
    for (let i = 0; i < A.length; ++i) {
      csvRow.push(A[i].join(","));
    }

    //Introduce line break for csv
    const csvString = csvRow.join("%0A");

    //Funtionality to download file
    const a = document.createElement("a");
    a.href = "data:attachment/csv," + csvString;
    a.target = "_Blank";
    a.download = "generatedCode.csv";
    document.body.appendChild(a);
    a.click();
  };

  return (
    <div>
      <div className="container">
        <div className="form-container">
          <h1>ADMIN PANEL</h1>
          <div></div>
          <table id="users-details">
            <thead className="table-heading">
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>EMAIL</td>
                <td>ZIPCODE</td>
                <td>RULES</td>
                <td>UPDATES</td>
                <td>COUNTS</td>
              </tr>
            </thead>
            <tbody className="table-body">
              {details &&
                details.data.map((data, i) => {
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
  );
};

export default Admin;
