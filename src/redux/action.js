export const insertData=(data)=> {
  return {
    type: "insert",
    id: data.id,
    login: data.login,
  };
}
export const updateData=(newValue, element)=> {
  return {
    type: "update",
    id: element.id,
    newValue: newValue,
  };
}
export const deleteData=(data)=> {
  return {
    type: "delete",
    id: data.id,
  };
}
export const fetchApi= () => async(dispatch)=>{
  const response= await fetch("https://api.github.com/users?since=135")
  const data=await response.json()
  // console.log("data")
  let featchedData= data.map((ele)=>{
     return {
       id:ele.id,
       login:ele.login
     }
   })
  //  console.log(featchedData)
   return featchedData.map((ele)=>dispatch({
     type:"FETCH",
     id:ele.id,
     login:ele.login
   })
  )
  
}