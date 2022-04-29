import React, { useEffect, useState } from "react";
import { deleteData, updateData } from "../redux/action";
import store from "../redux/store";

function TodoTask() {
//   console.log(store.getState());
  const editTodo = (e, element) => {
    var newValue = prompt("Enter your task")
    store.dispatch(updateData(newValue, element))
  };

  const deleteTodo = (element) => {
    store.dispatch(deleteData(element))
  };

  return (
    <div>
      {/* {console.log(store.getState())} */}
      {store.getState() ? (
        <div>
          {store.getState().map((element) => {
            return (
              <div>
                <div>{element.login}</div>
                {element.login && element.id ? (
                  <div>
                    <button onClick={(e) => editTodo(e, element)}>Edit</button>
                    <button onClick={(e) => deleteTodo(element)}>Delete</button>
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
