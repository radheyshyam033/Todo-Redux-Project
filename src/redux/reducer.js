
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
        ...state.map((ele) => {
          if (ele.id === action.id) {
            ele.login = action.newValue;
          }
          return ele
        }),
      ];
    case "delete":
      return state=[...state.filter((ele) => ele.id != action.id)];
      

    default:
      return state;
  }
  return state;
};
export default reducer;
