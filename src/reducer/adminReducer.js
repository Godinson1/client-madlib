import {
  ADMIN_LOGIN,
  LOADING_ADMIN,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  ADMIN_LOGIN_FAIL,
  LOADING_USERS_DATA,
  USERS_DATA_FAIL,
  USERS_DATA,
} from "../actions/types";

const initialState = {
  admin: {
    details: [],
    credentaials: {},
    loading: false,
    loading_details: false,
    authenticated: false,
    error_details: {},
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADMIN_LOGIN:
      return {
        ...state,
        loading: false,
        authenticated: true,
        credentials: action.payload,
      };

    case LOADING_USERS_DATA:
      return {
        ...state,
        loading_details: true,
      };

    case ADMIN_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOADING_ADMIN:
      return {
        ...state,
        loading: true,
      };

    case ADMIN_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
      };

    case SET_AUTHENTICATED:
      return {
        ...state,
        loading: false,
        authenticated: true,
      };

    case USERS_DATA:
      return {
        ...state,
        loading_details: false,
        authenticated: true,
        details: action.payload,
      };

    case USERS_DATA_FAIL:
      return {
        ...state,
        loading_details: false,
        authenticated: true,
        error_details: action.payload,
      };

    default:
      return state;
  }
}
