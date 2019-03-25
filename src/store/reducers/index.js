import { combineReducers } from "redux";
import visitorReducer from "./visitor.reducer";
const visitorApp = combineReducers({
  visitors: visitorReducer
});

export default visitorApp;
