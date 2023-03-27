import React from "react";
import { Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Home from "./components/Home";
import TodoList from "./components/todolist";
function App() {
  return (
      <Routes>
          <Route path='login' element={<Login/>} />
          <Route path='/*' element={<Home/>} />
          <Route path='todo' element={<TodoList/>}/>
      </Routes>
  );
}

export default App;
