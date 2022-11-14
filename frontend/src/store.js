import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./Reducers/userReducer";
import {
  guardianInfoReducer,
  preSchoolInfoReducer,
  studentInfoReducer,
} from "./Reducers/admissionReducer";

const reducer = combineReducers({
  user: userReducer,
  studentInfo: studentInfoReducer,
  guardianInfo: guardianInfoReducer,
  preSchoolInfo: preSchoolInfoReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  // applyMiddleware(...middleware)
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
