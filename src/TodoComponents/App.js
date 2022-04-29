import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoTask from "./TodoTask";
import InputData from "./InputData";
import TodoHeader from "./TodoHeader";

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoHeader />} />
          <Route exact path="/inputdata" element={<InputData />} />
          <Route exact path="/showdata" element={<TodoTask />} />
       </Routes>
       </BrowserRouter>
    </div>
  );
  
}

export default App;
