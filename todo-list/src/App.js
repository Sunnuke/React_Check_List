import React, {useState} from "react";
import './App.css';
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";


function App() {
  const [todo, setTodo] = useState([
    {body: 'Bathroom', completed: false},
    {body: 'Bedroom', completed: false},
    {body: 'Trash', completed: false},
    {body: 'Living Room', completed: false},
    {body: 'Office', completed: false}
  ]);

  // newTask={newTask}
  const newTask = (addTodo) => {
    const list = [...todo];
    list.push(addTodo);
    setTodo(list);
  }

  const deleteTodo = (deleteTodo) => {
    const list = [...todo];
    const newList = list.filter( (todo, idx) => idx !== deleteTodo )
    setTodo(newList);
    console.log(deleteTodo);
    console.log(list);
    console.log(newList);
  }

  return (
    <div className="App">
      <NewTodo newTask={newTask} />
      <TodoList list={todo} setList={setTodo}  deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
