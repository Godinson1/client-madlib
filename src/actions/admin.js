import {
  LOADING_ADMIN,
  ADMIN_LOGIN,
  ADMIN_LOGIN_FAIL,
  SET_UNAUTHENTICATED,
  USERS_DATA,
  LOADING_USERS_DATA,
  USERS_DATA_FAIL,
} from "./types";
import axios from "axios";
import { BASE_URL_LOCALHOST } from "./constant";

export const loginAdmin = (adminDetails, history) => async (dispatch) => {
  dispatch({ type: LOADING_ADMIN });
  try {
    const res = await axios.post(
      `${BASE_URL_LOCALHOST}/auth/login`,
      adminDetails
    );
    console.log(res.data);
    setAuthorization(res.data.token);
    dispatch({
      type: ADMIN_LOGIN,
      payload: res.data.admin,
    });
    history.push("/admin");
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload: err.response,
    });
  }
};

export const logoutAdmin = () => (dispatch) => {
  localStorage.removeItem("MLToken");
  delete axios.defaults.headers.common["madlib-token"];
  dispatch({ type: SET_UNAUTHENTICATED });
  window.location.href = "/login";
};

export const getUsersData = () => async (dispatch) => {
  dispatch({ type: LOADING_USERS_DATA });
  try {
    const res = await axios.get(`${BASE_URL_LOCALHOST}/madlib`);
    dispatch({
      type: USERS_DATA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: USERS_DATA_FAIL,
      payload: err.response,
    });
  }
};

const setAuthorization = (token) => {
  const MLToken = token;
  localStorage.setItem("MLToken", MLToken);
  axios.defaults.headers.common["madlib-token"] = MLToken;
};
