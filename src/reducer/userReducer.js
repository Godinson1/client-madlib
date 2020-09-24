import { LOADING_MADLIB, MADLIB_SUCCESS, MADLIB_FAIL } from "../actions/types";

const initialState = {
  madlib: {
    madlib: {},
    loading: false,
    error: "",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_MADLIB:
      return {
        ...state,
        loading: true,
      };

    case MADLIB_SUCCESS:
      return {
        ...state,
        loading: false,
        madlib: action.payload,
      };

    case MADLIB_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
