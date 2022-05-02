import React, { useState } from "react";
import { insertData } from "../redux/action";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import "./App.css";

function AddTask() {
  var [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    if (task !== "") {
      const detail = {
        id: Math.floor(Math.random() * 10000),
        login: task,
      };
      dispatch(insertData(detail));
    }
  };

  return (
    <div className="input">
      {<Navbar />}
      <div>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Type your task"
        ></input>
        <br />
        <br />
        <button onClick={addTask}> Add Task</button>
      </div>
    </div>
  );
}
export default AddTask;
