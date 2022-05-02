export const insertData = (data) => {
  return {
    type: "INSERT",
    id: data.id,
    login: data.login,
  };
};
export const updateData = (newValue, element) => {
  return {
    type: "UPDATE",
    id: element.id,
    newValue: newValue,
  };
};
export const deleteData = (data) => {
  return {
    type: "DELETE",
    id: data.id,
  };
};
export const fetchApi = () => async (dispatch) => {
  const response = await fetch("https://api.github.com/users?since=135");
  const data = await response.json();
  // console.log("data")
  // let featchedData = data.map((ele) => {
  //   return {
  //     id: ele.id,
  //     login: ele.login,
  //   };
  // });
  //  console.log(featchedData)
  return data.map((ele) =>
    dispatch({
      type: "INSERT",
      payLoad: ele
      // type: "INSERT",
      // id: ele.id,
      // login: ele.login,
    })
  );
};
