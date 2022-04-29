import React from "react";
import { deleteData, updateData } from "../redux/action";
import store from "../redux/store";
import TodoHeader from "./TodoHeader";

function TodoTask() {
  // console.log(store.getState())
  const editTodo = (e, element) => {
    var newValue = prompt("Enter your task")
    store.dispatch(updateData(newValue, element))
    // console.log(store.getState())
  };

  const deleteTodo = (element) => {
    store.dispatch(deleteData(element))
    // console.log(store.getState())
  };

  return (
    <div>
      <TodoHeader />
      {store.getState() ? (
        <div>
          {store.getState().map((element,id) => {
            return (
              <div key={id}>
                <div>{element.login}</div>
                {(element.login && element.id) ? (
                  <div>
                    <button onClick={(e) => editTodo(e, element)}>Edit</button>
                    <button onClick={() => deleteTodo(element)}>Delete</button>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
export default TodoTask;
