import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="header">
      <div>
        <h1>Todo App</h1>
      </div>
      <div>
        <Link to="/showdata">
          <button>Home</button>
        </Link>
        <Link to="/addtask">
          <button>Add Task</button>
        </Link>
      </div>
    </div>
  );
}
