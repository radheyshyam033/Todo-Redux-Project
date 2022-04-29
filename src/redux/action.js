export function insertData(data) {
  return {
    type: "insert",
    id: data.id,
    login: data.login,
  };
}
export function updateData(newValue, element) {
  return {
    type: "update",
    id: element.id,
    newValue: newValue,
  };
}
export function deleteData(dataId) {
  return {
    type: "delete",
    id: dataId,
  };
}
