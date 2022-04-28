import React from "react";

function Input(props){
    
    return (
        <div>
            <input type="text" onChange={props.handleChange} placeholder="Type your task"></input>
             <button onClick={props.addTask} > Add Task</button><br />
        </div>
    )
    }
export default Input