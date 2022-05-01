import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoTask from "./TodoTask";
import ShowProfile from "./ViewProfile";
import Navbar from "./Navbar";
import AddTask from "./AddTask";
import ViewProfile from "./ViewProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route exact path="/addtask" element={<AddTask />} />
            <Route exact path="/showdata" element={<TodoTask />} />
            <Route exact path="/viewprofile" element={<ViewProfile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
