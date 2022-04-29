
const reducer = (state = [], action) => {
  // console.log(action.type)
  if(action.type!==''){
  switch (action.type) {
    case "FETCH":
      return [
        ...state,
        {
          id: action.id,
          login: action.login,
        },
      ];
    case "INSERT":
      return [
        ...state,
        {
          id: action.id,
          login: action.login,
        },
      ];
    case "UPDATE":
      return [
        ...state.map((ele) => {
          if (ele.id === action.id) {
            ele.login = action.newValue;
          }
          return ele
        }),
      ];
    case "DELETE":
      // console.log(state)
      return [...state.filter((ele) => ele.id !== action.id)];

    default:
      return state;
  }
}
};
export default reducer;
