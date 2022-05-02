
const reducer = (state = [], action) => {
  let actionData=action.payLoad

  if (action.type !== "") {
    switch (action.type) {
      case "INSERT":
        return [
          ...state,actionData
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
        console.log(state)
        var preData = [...state];
        preData = preData.filter((ele) => ele.id !== action.id);
        return preData;

      default:
        return state;
    }
  }
};
export default reducer;
