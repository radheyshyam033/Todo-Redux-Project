import { Provider } from "react-redux";
import "./App.css";
import FetchApiData from "./TodoComponents/FetchApiData";
import TodoHeader from "./TodoComponents/TodoHeader";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <TodoHeader />
        <FetchApiData />
      </Provider>
    </div>
  );
}

export default App;
