import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";


function App() {
  let todoItems = [
    {'name': 'Buy Milk', 'dueDate':'16/08/2025'},
    {'name': 'Go to college!', 'dueDate':'18/08/2025'}
  ];
  return (
    <center className="container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
      
    </center>
  );
}

export default App;
