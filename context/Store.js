const { configureStore } = require("@reduxjs/toolkit");
import reducer from "./Reducer";

const Store = configureStore({
  reducer,
});

export default Store;
