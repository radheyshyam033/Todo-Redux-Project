import './App.css';
import Todos from './TodoComponents/Todos';
import TodoHeader from './TodoComponents/TodoHeader';


function App() {
  return (
    <div>  
      <TodoHeader />
      <Todos />
    </div>
  )
}

export default App;
