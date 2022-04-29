import React, { useState } from "react";
import store from "../redux/store";
import { insertData } from "../redux/action";
import TodoHeader from "./TodoHeader";

function InputData() {
  var [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    if (task !== "") {
      const detail = {
        id: Math.floor(Math.random() * 10000),
        login: task,
      };
      store.dispatch(insertData(detail));
    }
  };

  return (
    <div>
      <TodoHeader />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type your task"
      ></input>
      <button onClick={addTask}> Add Task</button>
      <br />
    </div>
  );
}
export default InputData;
