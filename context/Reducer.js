import { combineReducers } from "@reduxjs/toolkit";
import { AddReducer } from "./AddReducer";

const Reducer = combineReducers({
  add_reducer: AddReducer,
});

export default Reducer;
