import { combineReducers } from "redux";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  user: userReducer,
  admin: adminReducer,
});
