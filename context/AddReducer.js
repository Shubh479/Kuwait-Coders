import { ADD_DATA_TO_CART } from "./actionTypes";

export const AddReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_DATA_TO_CART:
      const { payload } = action;

      state = payload;

      return state;

    default:
      return state;
  }
};
