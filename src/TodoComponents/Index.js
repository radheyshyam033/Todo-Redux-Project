import React, { useState } from 'react';
import { Route,Routes } from "react-router-dom";
import store from "../redux/store";
import {insertData, deleteData} from "../redux/action";
import Input from "./Input";

function Index(props) {

  var [ task, setTask ] = useState('');
  props.text.map((ele)=>{
    // console.log(ele)
    store.dispatch(insertData({
      id:ele.id,
      login:ele.login
    }))
  })

  console.log(store.getState())


  // store.subscribe(()=>{
  //   console.log("Store changed", store.getState())
  // })
  //   store.dispatch(insertData({
  //     id:1,
  //     login:'radhey'
  //   }));
  //   store.dispatch(insertData({
  //     id:2,
  //     login:'radhey'
  //   }));
  //   store.dispatch(insertData({
  //     id:3,
  //     login:'radhey'
  //   }));

  //   store.dispatch(deleteData({
  //     id:1,
  //     login:'radhey'
  //   }));

    const handleChange=(e)=>{
      setTask(e.target.value)
  }
  
  const addTask=((e)=>{
      if(task!==''){
        const detail={
          id:Math.floor(Math.random()*1000),
          login:task,
        }
        store.dispatch(insertData(detail))
      }
  })
  return (
    <div>
      
        <Routes>
            {/* <Route path='/showdata' element={<TodoTask />} /> */}
            <Route exact path="/inputdata" element={<Input
            handleChange={handleChange}
            addTask={addTask}
          /> } />
        </Routes> 
      
      
    </div>
  )
  }

  export default Index