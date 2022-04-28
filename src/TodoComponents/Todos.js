
import React, { useEffect, useState } from 'react';
// import { Route,Routes } from "react-router-dom";
// import TodoTask from "./TodoTask";
// import Input from "./Input"
import Index from './Index'

function Todos() {
    
    const [ todoList, setTodoList ] = useState([]);
    useEffect(()=>{
      fetch("https://api.github.com/users?since=135").then((data)=>{
        return data.json()
      }).then(res=>{
        return setTodoList(res)
      })
    },[])

  

  return (
  <div>
    {/* {console.log(todoList)} */}
    {<Index text={todoList} />}
  </div>
  )   
}

export default Todos
