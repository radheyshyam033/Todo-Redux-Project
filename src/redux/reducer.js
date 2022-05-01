const reducer = (state = [], action) => {
  if (action.type !== "") {
    switch (action.type) {
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
            return ele;
          }),
        ];
      case "DELETE":
        var preData = [...state];
        preData = preData.filter((ele) => ele.id !== action.id);
        return preData;

      default:
        return state;
    }
  }
};
export default reducer;
