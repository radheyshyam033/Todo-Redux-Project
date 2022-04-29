import React, { useEffect, useState } from "react";
import TodoApp from "./TodoApp";

function FetchApiData() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users?since=135")
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        return setTodoList(res);
      });
  }, []);

  return (
    <div>
      {/* {console.log(todoList)} */}
      {<TodoApp text={todoList} />}
    </div>
  );
}

export default FetchApiData;
