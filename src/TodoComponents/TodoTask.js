import React from "react";
import { deleteData, updateData } from "../redux/action";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";

const TodoTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editTodo = (e, element) => {
    var newValue = prompt("Enter your task");
    dispatch(updateData(newValue, element));
  };

  const deleteTodo = (element) => {
    dispatch(deleteData(element));
  };

  const data = useSelector((state) => state);

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
