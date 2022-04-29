import { act } from "@testing-library/react";
import store from "./store";

const reducer = (state = [], action) => {
  // console.log(state)
  switch (action.type) {
    case "insert":
      return [
        ...state,
        {
          id: action.id,
          login: action.login,
        },
      ];
    case "update":
      return [
        ...state,
        state.map((ele) => {
          if (ele.id === action.id) {
            ele.login = action.newValue;
          }
        }),
      ];
    case "delete":
      return state.filter((_,id) => id != action.id);

    default:
      return state;
  }
  return state;
};
export default reducer;
