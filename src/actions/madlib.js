import { LOADING_MADLIB, MADLIB_FAIL, MADLIB_SUCCESS } from "./types";
import axios from "axios";
import { BASE_URL } from "./constant";

export const easyMadlib = (data, history) => async (dispatch) => {
  dispatch({ type: LOADING_MADLIB });
  try {
    const res = await axios.post(`${BASE_URL}/madlib/easy`, data);
    console.log(res.data);
    dispatch({
      type: MADLIB_SUCCESS,
      payload: res.data.data,
    });
    history.push(`/madlib/easy?e=${data.email}`);
  } catch (err) {
    if (err && err.response) {
      console.log(err.response.data);
      dispatch({ type: MADLIB_FAIL, payload: err.response.data });
    }
  }
};

export const intermediateMadlib = (data, history) => async (dispatch) => {
  dispatch({ type: LOADING_MADLIB });
  try {
    const res = await axios.post(`${BASE_URL}/madlib/intermediate`, data);
    dispatch({
      type: MADLIB_SUCCESS,
      payload: res.data.data,
    });
    history.push(`/madlib/intermediate?e=${data.email}`);
  } catch (err) {
    dispatch({ type: MADLIB_FAIL, payload: err.response.data });
  }
};

export const advancedMadlib = (data, history) => async (dispatch) => {
  dispatch({ type: LOADING_MADLIB });
  try {
    const res = await axios.post(`${BASE_URL}/madlib/advanced`, data);
    dispatch({
      type: MADLIB_SUCCESS,
      payload: res.data.data,
    });
    history.push(`/madlib/advanced?e=${data.email}`);
  } catch (err) {
    dispatch({ type: MADLIB_FAIL, payload: err.response.data });
  }
};

export const retrieveMadlib = (data) => async (dispatch) => {
  dispatch({ type: LOADING_MADLIB });
  try {
    const res = await axios.get(`${BASE_URL}/madlib/retrieve/${data}`);
    dispatch({
      type: MADLIB_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({ type: MADLIB_FAIL, payload: err.response });
  }
};
