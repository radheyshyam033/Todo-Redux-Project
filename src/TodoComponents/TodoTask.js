import React, { useState,useEffect } from "react";
import { deleteData, updateData } from "../redux/action";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";
import store from "../redux/store";

const TodoTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // var [data,setData]=useState([])

  

  const editTodo = (e, element) => {
    var newValue = prompt("Enter your task");
    dispatch(updateData(newValue, element));
  };

  const deleteTodo = (element) => {
    // console.log(element)
    dispatch(deleteData(element));
  };

  const data = useSelector((state) => state);

  // stateData.map((ele)=>{
  //   setData(ele.actionData)
  //   console.log(ele.actionData.id)
  // })
  // console.log(setData)
  
  // const [actionData, setActionData]=useState([])
  // data.map((ele)=>{setActionData(ele)})
  // console.log(actionData)
//   const [data, setData]= useState("")
// useEffect(()=>{
//    setData(stateData)
//    console.log("In use Effect")
// },[stateData])
// console.log(actionData)

  return (
    <div>
      {data.length ? (
        <>
          {<Navbar />}
          <div>
            {data.map((element) => {
              return (
                <div key={element.id} className="body">
                  {element.login && element.id ? (
                    <>
                      <div>Name: {element.login} </div>
                      <br />
                      <button onClick={(e) => editTodo(e, element)}>
                        Edit
                      </button>
                      <button onClick={() => deleteTodo(element)}>
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          navigate("/viewprofile", { state: element });
                        }}
                      >
                        View
                      </button>
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};
export default TodoTask;
