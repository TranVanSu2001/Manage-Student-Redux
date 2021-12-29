import { combineReducers } from "redux";

import studentReducer from "./student";

const rootReducer = combineReducers({
  Student: studentReducer,
});

export default rootReducer;
