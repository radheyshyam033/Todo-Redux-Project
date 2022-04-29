import React from "react"
import { Link } from "react-router-dom"

export default function TodoHeader(){
    return(
       <header className="Todo-header">
      <h1>Todo App</h1><br />
      
      <Link to='/inputdata'><button>Add Task</button></Link>
      <Link to='/showdata'><button>Home</button></Link>

      </header>)
}