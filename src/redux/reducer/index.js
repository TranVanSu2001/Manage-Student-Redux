import { combineReducers } from "redux";

import studentReducer from "./student";
import postReducer from "./post";

const rootReducer = combineReducers({
  Student: studentReducer,
  Post: postReducer,
});

export default rootReducer;
