export const insertData = (data) => {
  return {
    type: "INSERT",
    payLoad:{
    id: data.id,
    login: data.login}
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

  return data.map((ele) =>
    dispatch({
      type: "INSERT",
      payLoad: ele
    })
  );
};
