import { LOADING_MADLIB, MADLIB_FAIL, MADLIB_SUCCESS } from "./types";
import axios from "axios";

export const easyMadlib = (data, history) => async (dispatch) => {
  dispatch({ type: LOADING_MADLIB });
  try {
    const res = await axios.post("http://localhost:4000/madlib/easy", data);
    dispatch({
      type: MADLIB_SUCCESS,
      payload: res.data.data,
    });
    history.push(`/madlib/easy?e=${data.email}`);
  } catch (err) {
    dispatch({ type: MADLIB_FAIL, payload: err.response.data });
  }
};

export const intermediateMadlib = (data, history) => async (dispatch) => {
  dispatch({ type: LOADING_MADLIB });
  try {
    const res = await axios.post(
      "http://localhost:4000/madlib/intermediate",
      data
    );
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
    const res = await axios.post("http://localhost:4000/madlib/advanced", data);
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
    const res = await axios.get("http://localhost:4000/madlib/retrieve", data);
    dispatch({
      type: MADLIB_SUCCESS,
      payload: res.data.data,
    });
    console.log(res.data);
  } catch (err) {
    dispatch({ type: MADLIB_FAIL, payload: err.response.data });
  }
};