import React from "react";
import { Route, Routes } from "react-router-dom";
import store from "../redux/store";
import { insertData, deleteData } from "../redux/action";
import Input from "./Input";
import TodoTask from "./TodoTask";
import { Provider } from "react-redux";

function TodoApp(props) {
  props.text.map((ele) => {
    // console.log(ele)
    store.dispatch(
      insertData({
        id: ele.id,
        login: ele.login,
      })
    );
  });

  // console.log(store.getState())

  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/showdata" element={<TodoTask />} />
          <Route exact path="/inputdata" element={<Input />} />
       </Routes>
      </Provider>
    </div>
  );
}

export default TodoApp;
