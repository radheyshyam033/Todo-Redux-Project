import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './TodoComponents/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchApi } from './redux/action';
import TodoTask from './TodoComponents/TodoTask';


const root = ReactDOM.createRoot(document.getElementById('root'));
{store.dispatch(fetchApi())}
root.render(
      <Provider store={store}>
         <App />
      </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
